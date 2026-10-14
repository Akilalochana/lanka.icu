import { readFile, readdir } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL in .env.local before running db:migrate.");
const sql = neon(process.env.DATABASE_URL);
for (const file of (await readdir(new URL("../db/", import.meta.url))).filter(file => file.endsWith(".sql")).sort()) {
  const migration = await readFile(new URL(`../db/${file}`, import.meta.url), "utf8");
  await sql.transaction(migration.split(";").map(s => s.trim()).filter(Boolean).map(s => sql.query(s)));
}
console.log("Neon schema is ready.");
