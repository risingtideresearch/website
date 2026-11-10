# ESS Site — Frontend

Next.js frontend for [electricshipwrights.org](https://electricshipwrights.org), pulling content from Sanity.

## Setup

```bash
npm install
cp .env.example .env
# fill in .env values (see below)
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (e.g. `production`) |
| `SANITY_API_READ_TOKEN` | Sanity read token for draft previews |
| `BUTTONDOWN_API_KEY` | Buttondown API key for newsletter subscriptions |

## Key routes

| Path | Description |
|---|---|
| `/` | Homepage |
| `/[slug]` | Program pages |
| `/api/subscribe` | Newsletter subscription (POST) |
| `/rss.xml` | RSS feed |

## Deployment

Deployed to Netlify via the `@netlify/plugin-nextjs` plugin. Push to `main` triggers a build.
