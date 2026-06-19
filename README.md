# RTRF Mainsite

Website for the Rising Tide Research Foundation at [risingtideresearch.org](https://risingtideresearch.org).

Built with Next.js and Sanity CMS, deployed on Netlify.

## Structure

```
ui/       Next.js frontend
studio/   Sanity content studio
```

## Development

Run both the frontend and studio concurrently:

```bash
# Frontend (http://localhost:3000)
cd ui && npm run dev

# Sanity Studio (http://localhost:3333)
cd studio && npm run dev
```

See [ui/README.md](ui/README.md) and [studio/README.md](studio/README.md) for setup details.
