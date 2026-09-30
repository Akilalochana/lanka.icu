# Lanka.icu — Next.js + Neon

The original React/Vite site has been migrated into this single Next.js App Router project. Run commands from `E:\clients_projects\lankaicu\updated_to_next_app`.

## Local setup

1. Install Node.js 20.9+ and run `npm install`.
2. Copy `.env.example` to `.env.local` and replace `DATABASE_URL` with your Neon PostgreSQL connection string (including `sslmode=require`). Never expose this variable using a `NEXT_PUBLIC_` prefix.
3. Run `npm run db:migrate` to create the reviews table and index. This additive migration is safe to rerun.
4. Run `npm run dev` and open http://localhost:3000.

The site builds and renders without database credentials. In that case the reviews API returns 503 and the UI shows an unavailable message; it does not claim a review was saved. A Neon account/database is not created automatically.

## What moved

- Home, packages, destinations, testimonials, about, contact and blog pages, with all original content and public assets.
- Five package detail pages and six blog detail pages, statically generated with metadata. Unknown IDs return HTTP 404.
- Next Link navigation, responsive menus, gallery slider, animations, blog category filtering and itinerary accordions.
- Reviews now use the same-origin `GET /api/reviews` and `POST /api/reviews`, backed by Neon. No separate Express/MongoDB/Render service is required.
- Home and testimonials both display database reviews. The old hard-coded testimonials remain in `src/data/testimonials.ts` for reference only and are not automatically presented as database records.
- Server validation, parameterized SQL, server-generated IDs/dates, and private email storage. Neither GET nor POST responses expose reviewers' email addresses. Successful reviews publish immediately, matching the original fetch-after-submit flow.
- Contact email delivery still uses the original EmailJS integration. Its public configuration can be overridden with the `NEXT_PUBLIC_EMAILJS_*` variables. Configure your production domain in EmailJS as needed. No test emails were sent during migration.

The project uses Tailwind 3 to preserve the original site's utility classes, colors and opacity behavior. Next.js 16 and React 19 remain in place. The unused Prisma packages from the starter were replaced with the Neon serverless driver; there is no Prisma generation step. Fonts use the same Google Fonts source as the original site.

## Import existing reviews

Export the old database reviews as a JSON array into a private local file. Then run:

```powershell
npm run db:import-reviews -- "E:\path\to\reviews.json"
```

Each record needs `id` or `_id`, `name`, `email`, numeric `rating` (1–5), `comment`, and an original `date` or `createdAt`. `location` and `package` are optional. MongoDB Extended JSON `_id: { "$oid": "..." }` and dates `{ "$date": "ISO timestamp" }` are supported.

The importer validates all records before writing and inserts them in one transaction. Original dates are preserved; reruns skip existing legacy IDs. It does not delete or modify the old database. Keep exports outside the repository or in the ignored `private-data/` directory. No legacy records have been imported yet because no export or Neon connection was supplied.

## Verification

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

If Chrome is already installed, avoid the browser download with `$env:PLAYWRIGHT_CHANNEL = 'chrome'` before running the browser tests. Browser tests start the production server on port 3100, so build first. They check routes, 404 responses, filtering, mobile navigation, itinerary interaction, review form behavior with a mocked API, and real API input validation. They do not write test reviews to a live database or send contact emails. Lint retains image optimization warnings for the original `<img>` elements.

After connecting Neon, verify persistence by submitting a review, refreshing testimonials and opening Home. Confirm the record in Neon and check that `/api/reviews` does not include email. This live persistence check is still pending.

## Deployment

Deploy this directory as one Next.js app on a Node-capable host such as Vercel. Set `DATABASE_URL` in the host's environment, apply `npm run db:migrate` against that database, and build with `npm run build`. For a Node server, use `npm run start`. A static-only export cannot run the review API. Configure any EmailJS overrides before building because public environment variables are embedded in the browser bundle.

## Original content limitations

The original tour names, durations, itinerary lengths and some form package labels disagree. These business values were retained rather than inventing new itineraries or prices. The footer newsletter form and social `#` links were presentational placeholders in the source and still need a newsletter provider and real social URLs. The contact address and embedded Colombo map also disagree in the source. External Pexels photos, Google Maps, Google Fonts and EmailJS still require their respective services to be reachable.
