import { getDb } from "@/src/lib/db";
export const runtime = "nodejs";
export async function GET(_request: Request, { params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) return new Response(null, {status:404});
  try {
    const sql = getDb();
    const [photo] = await sql`SELECT encode(image, 'base64') AS data FROM review_photos WHERE id = ${id}`;
    if (!photo) return new Response(null, {status:404});
    return new Response(new Uint8Array(Buffer.from(photo.data, 'base64')), {headers:{'Content-Type':'image/jpeg','Cache-Control':'public, max-age=86400','X-Content-Type-Options':'nosniff'}});
  } catch { return new Response(null, {status:503}); }
}
