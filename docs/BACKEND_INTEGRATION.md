# Backend integration handoff

## Content source

The restored `nextgotech-lara` MySQL database is the source of truth for this frontend’s public content. The implementation uses verified records from:

- `site_settings`, `home_sections` and `about_contents`
- `products`, `solutions` and `services`
- `legal_documents` and `faqs`

The current frontend keeps this verified content in `src/data/site.ts` so it can build independently. `src/lib/repositories.ts` uses typed local repositories with the same public content shape and is the handoff point for a future API-backed fetch layer.

## Lead submissions

`src/components/forms/ContactForm.tsx` posts to Laravel’s existing `POST /api/v1/leads` endpoint. By default it uses `http://127.0.0.1:8000/api/v1`; set `NEXT_PUBLIC_API_URL` for another environment.

The endpoint accepts the fields sent by the form and enforces Laravel-side validation and throttling. No user or lead records were read during the content audit.

## Recommended next step

Move the public content repositories to the Laravel read endpoints when deployment environment variables are available, retaining the typed UI contracts already in place.
