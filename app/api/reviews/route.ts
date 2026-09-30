import { getDb } from "@/src/lib/db";
import { validateReview } from "@/src/lib/review-validation";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const sql = getDb();
    const reviews = await sql`SELECT id, name, location, tour_package AS package, rating, comment, created_at AS date FROM reviews ORDER BY created_at DESC, id DESC`;
    return Response.json(reviews, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("Reviews could not be loaded. Check DATABASE_URL and run db:migrate.");
    return Response.json({ error: "Reviews are temporarily unavailable. Please try again later." }, { status: 503 });
  }
}
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Expected JSON." }, { status: 415 });
  let review;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > 32768) return Response.json({ error: "Review is too large." }, { status: 413 });
    review = validateReview(JSON.parse(body));
  } catch (error) {
    return Response.json({ error: error instanceof SyntaxError ? "Invalid JSON." : error instanceof Error ? error.message : "Invalid review." }, { status: 400 });
  }
  try {
    const sql = getDb();
    const [saved] = await sql`INSERT INTO reviews (name, email, location, tour_package, rating, comment)
      VALUES (${review.name}, ${review.email}, ${review.location}, ${review.package}, ${review.rating}, ${review.comment})
      RETURNING id, name, location, tour_package AS package, rating, comment, created_at AS date`;
    return Response.json(saved, { status: 201 });
  } catch {
    console.error("Review could not be saved. Check DATABASE_URL and run db:migrate.");
    return Response.json({ error: "Unable to save your review. Please try again later." }, { status: 503 });
  }
}
