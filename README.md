# German UDS India

Market website for the [German University of Digital Science](https://german-uds.de/) aimed at applicants in India. Same programmes, fees and accreditation as the main site; messaging for studying from home, cost of living, Student Affairs, Fast Track and The Founder's MBAs.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If `npm install` hangs in this OneDrive folder, pause OneDrive sync for the folder or run the project from a local disk copy.

Set `NEXT_PUBLIC_SITE_URL` to the production hostname before deploying (used for canonical URLs, Open Graph and sitemap). Default: `https://india.german-uds.de`.

## Brand

- Wordmark: `public/logo/logo-fixed.svg` (official file from german-uds.de). Replace that file, or point `SITE.logo.src` in `lib/site.ts` at another path, to use a newer official logo.
- Buttons follow the main site: orange CTA (`rounded-md`, `#fd9800`) and orange text links (`#f18800`).

## Notes

- Applications complete on german-uds.de. This site does not award degrees itself.
- Tuition and deadlines are copied from the public catalogue and should be re-checked before campaigns.
