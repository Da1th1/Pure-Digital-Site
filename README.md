# Pure Digital website

Marketing site for **Pure Digital**, an app development studio in Dublin, Ireland.
Single-page React app (Create React App) served by nginx in Docker.

## Develop

```bash
npm install
npm start        # http://localhost:3000
npm test
npm run build    # production build in ./build
```

## Editing content

All copy (services, process steps, FAQ, contact details) lives in `src/content.js`.

The FAQ and service list are **also** written into `public/index.html`:

- the `FAQPage` / `ProfessionalService` JSON-LD in `<head>` (Google rich results, AI answer engines)
- the plain-HTML fallback inside `<div id="root">`, which is what non-JavaScript crawlers
  (GPTBot, ClaudeBot, PerplexityBot and others) read

If you change a question, answer or service, update all three places.

## SEO / GEO files

| File | Purpose |
| --- | --- |
| `public/robots.txt` | Allows all search engines and AI crawlers, points to the sitemap |
| `public/sitemap.xml` | Sitemap. Update `lastmod` and add URLs as pages are added |
| `public/llms.txt` | Plain-text summary of the business for LLMs |
| `public/og-image.png` | 1200x630 social share image |

The canonical domain is set to `https://puredigital.ie/`. Change it in `index.html`,
`robots.txt`, `sitemap.xml` and `llms.txt` if the site lives elsewhere.

## Deploy (Docker)

```bash
docker compose -f docker-compose.prod.yml up -d --build
```
