# Wedding invitation

An immersive, animated invitation website celebrating the divine union of Shiva & Parvati — parallax hero with a symbolic hand-union illustration, custom cursor, floating marigold petals, countdown timer, ceremony timeline, a sacred-feast carousel, a photo gallery and an embedded venue map.

Pure front-end, static site — no backend, no database, nothing to manage in production.

## Stack

- **React 18 + Vite, Tailwind CSS, Framer Motion, Swiper**
- Served by **Nginx** (non-root image, hardened security headers) inside a single Docker container.

## Quick start (Docker)

```bash
docker compose up --build
```

Visit **http://localhost:8080**.

## Local development (without Docker)

```bash
cd frontend
npm install
npm run dev   # http://localhost:5173
```

## Customize the content

All event details (event name, date, ceremony schedule, food menu, venue, gallery captions) live in one file:

```
frontend/src/data/eventData.js
```

Edit the date, venue address and schedule there — the countdown, timeline and maps update automatically. Swap in real photography by replacing the image URLs.

## Security notes

- Nginx sends hardened headers: strict `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- Docker image runs as a **non-root user** (`nginx-unprivileged`), multi-stage build strips all dev dependencies and build tools from the final image.
- No forms, no user input, no API surface — nothing to sanitize or secure server-side.
- Dependencies are kept vulnerability-free (`npm audit` clean).
