# ESS Site — Sanity Studio

Content studio for [electricshipwrights.org](https://electricshipwrights.org).

## Setup

```bash
npm install
cp .env.example .env
# fill in .env values (see below)
npm run dev
```

Runs at [http://localhost:3333](http://localhost:3333).

## Environment variables

| Variable | Description |
|---|---|
| `SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL` | Netlify build hook URL for the deploy button |
| `SANITY_STUDIO_SITE_URL` | Public URL of the frontend (for preview links) |

## Content types

| Type | Description |
|---|---|
| `activity` | Top-level research activity areas |
| `program` | Individual programs within an activity |
| `update` | News/progress updates attached to a program |
| `resource` | External links shown on the homepage |
| `resourceType` | Categories for resources |
| `person` | Directory member |
| `personGroup` | Directory group (e.g. Leadership, Staff) |
| `partner` | Partner organizations |
| `event` | Events |
| `home` | Homepage singleton (title, description, hero image) |

## Deployment

The studio is deployed to Netlify alongside the frontend. A deploy button in the studio toolbar triggers a manual Netlify build via the configured build hook.
