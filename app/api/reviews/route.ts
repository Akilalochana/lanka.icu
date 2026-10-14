import { getDb } from "@/src/lib/db";
import { validateReview } from "@/src/lib/review-validation";
import { prepareReviewPhotos } from "@/src/lib/review-photos";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const sql = getDb();
    const reviews = await sql`SELECT r.id, name, location, tour_package AS package, rating, comment, created_at AS date,
      COALESCE((SELECT json_agg(json_build_object('id', p.id, 'url', '/api/reviews/photos/' || p.id) ORDER BY position) FROM review_photos p WHERE p.review_id = r.id), '[]'::json) AS photos
      FROM reviews r ORDER BY created_at DESC, r.id DESC`;
    return Response.json(reviews, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("Reviews could not be loaded. Check DATABASE_URL and run db:migrate.");
    return Response.json({ error: "Reviews are temporarily unavailable. Please try again later." }, { status: 503 });
  }
}
export async function POST(request: Request) {
  const type = request.headers.get('content-type') ?? '';
  const multipart = type.startsWith('multipart/form-data');
  if (!multipart && !type.includes('application/json')) return Response.json({error:'Expected JSON or a photo upload.'}, {status:415});
  const limit = multipart ? 3500000 : 32768;
  let review;
  let photos: Awaited<ReturnType<typeof prepareReviewPhotos>> = [];
  try {
    // Enforce the limit while reading, including requests without Content-Length.
    const reader = request.body?.getReader();
    const chunks: Uint8Array[] = []; let size = 0;
    if (reader) while (true) {
      const {done,value} = await reader.read(); if(done) break;
      size += value.byteLength;
      if(size > limit) { await reader.cancel(); return Response.json({error:'Review is too large. Please choose smaller photos.'},{status:413}); }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks);
    if (multipart) {
      const form = await new Response(body, {headers:{'Content-Type':type}}).formData();
      const fields = Object.fromEntries(form.entries());
      review = validateReview({...fields, rating:Number(fields.rating)});
      const uploads = form.getAll('photos');
      if (uploads.some(value => typeof value === 'string')) throw new Error('Invalid photo upload.');
      photos = await prepareReviewPhotos(uploads as File[]);
    } else review = validateReview(JSON.parse(body.toString('utf8')));
  } catch(error) {
    return Response.json({error:error instanceof SyntaxError ? 'Invalid JSON.' : error instanceof Error ? error.message : 'Invalid review.'},{status:400});
  }
  try {
    const sql = getDb();
    // A single statement makes the review and all its photos atomic.
    const [saved] = await sql`WITH new_review AS (
      INSERT INTO reviews (name,email,location,tour_package,rating,comment)
      VALUES (${review.name},${review.email},${review.location},${review.package},${review.rating},${review.comment})
      RETURNING id,name,location,tour_package AS package,rating,comment,created_at AS date
    ), new_photos AS (
      INSERT INTO review_photos (id,review_id,position,image)
      SELECT p.id::uuid,r.id,p.position,decode(p.data,'base64') FROM new_review r,
      json_to_recordset(${JSON.stringify(photos)}::json) AS p(id text,position smallint,data text)
      RETURNING id,position
    ) SELECT r.*,COALESCE((SELECT json_agg(json_build_object('id',id,'url','/api/reviews/photos/' || id) ORDER BY position) FROM new_photos),'[]'::json) AS photos FROM new_review r`;
    return Response.json(saved,{status:201});
  } catch {
    console.error('Review could not be saved. Check DATABASE_URL and run db:migrate.');
    return Response.json({error:'Unable to save your review. Please try again later.'},{status:503});
  }
}
