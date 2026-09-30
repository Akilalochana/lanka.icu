import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL in .env.local before running db:migrate.");
const sql = neon(process.env.DATABASE_URL);
const migration = await readFile(new URL("../db/001_initial.sql", import.meta.url), "utf8");
// Simple DDL statements; no semicolons inside literals.
await sql.transaction(migration.split(";").map(s => s.trim()).filter(Boolean).map(s => sql.query(s)));
console.log("Neon schema is ready.");
