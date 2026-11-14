# QA report

Date: 14 November 2026

## Automated checks

- `npm run build` — passed with 45 generated routes, including all products, services and solution pages.
- `npm run test:e2e` — passed: header menu/scroll behaviour, mobile navigation and enquiry submission flow, and representative public routes.

## Content verification

- Public website content was checked against the restored `nextgotech-lara` MySQL database.
- Homepage messaging, products, solutions, services, values, about copy and policy metadata use verified Next Go Tech Africa source material.
- Contact submissions post to the existing Laravel `POST /api/v1/leads` endpoint; the browser must be configured with `NEXT_PUBLIC_API_URL` when the API is not served at `http://127.0.0.1:8000/api/v1`.

## Interaction coverage

- Dark visual language, floating/compacting header, desktop mega menus, mobile drawer, reveal motion and reduced-motion support remain in place.
- Legacy case-study URLs redirect to the verified Products section rather than showing fictional portfolio content.
