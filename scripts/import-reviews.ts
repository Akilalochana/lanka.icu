import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";
import nextEnv from "@next/env";
import { validateReview } from "../src/lib/review-validation";

async function main() {
  nextEnv.loadEnvConfig(process.cwd());
  const file = process.argv[2];
  if (!file) throw new Error("Usage: npm run db:import-reviews -- path/to/reviews.json");
  if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL in .env.local first.");
  const raw: unknown = JSON.parse(await readFile(file, "utf8"));
  if (!Array.isArray(raw)) throw new Error("Expected a JSON array of exported reviews.");
  // Validate everything before writing. No partial imports or invented dates/emails.
  const rows = raw.map((item, index) => {
    try {
      const review = validateReview(item);
      const id = item._id?.$oid ?? item._id ?? item.id;
      if (typeof id !== "string" || !id.trim()) throw new Error("A stable id or _id is required.");
      const date = item.date?.$date ?? item.date ?? item.createdAt?.$date ?? item.createdAt;
      if (typeof date !== "string" || !Number.isFinite(Date.parse(date))) throw new Error("A valid original date is required.");
      return { ...review, legacyId: id, date: new Date(date).toISOString() };
    } catch (error) {
      throw new Error(`Invalid review at index ${index}: ${error instanceof Error ? error.message : 'invalid data'}`);
    }
  });
  if (!rows.length) { console.log("No reviews to import."); return; }
  const sql = neon(process.env.DATABASE_URL);
  const results = await sql.transaction(rows.map(r => sql`INSERT INTO reviews (legacy_id, name, email, location, tour_package, rating, comment, created_at)
    VALUES (${r.legacyId}, ${r.name}, ${r.email}, ${r.location}, ${r.package}, ${r.rating}, ${r.comment}, ${r.date})
    ON CONFLICT (legacy_id) DO NOTHING RETURNING id`));
  console.log(`Imported ${results.reduce((sum, rows) => sum + rows.length, 0)} reviews; existing legacy IDs were skipped.`);
}
main().catch(error => {
  console.error(error instanceof Error && (error.message.startsWith("Invalid review") || error.message.startsWith("Usage:") || error.message.startsWith("Set DATABASE_URL") || error.message.startsWith("Expected")) ? error.message : "Import failed. Check the export file, database connection, and schema. No reviews were committed.");
  process.exitCode = 1;
});
