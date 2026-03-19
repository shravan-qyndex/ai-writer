# Deployment Instructions

**Project type:** node
**Framework:** node

## Quick Start (Docker)

```bash
docker compose up --build
```

## Local Development

```bash
npm install
npm start
```

## Files

- `.dockerignore` (deployment)
- `Dockerfile` (deployment)
- `docker-compose.yml` (deployment)
- `next.config.js`
- `package.json`
- `postcss.config.js`
- `qyngent.md`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/CTA.tsx`
- `src/components/EmailSignup.tsx`
- `src/components/Features.tsx`
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`
- `src/components/LogoBar.tsx`
- `src/components/Nav.tsx`
- `src/components/Pricing.tsx`
- `src/components/Testimonials.tsx`
- `src/components/ui/button.tsx`
- `src/lib/i18n.ts`
- `src/lib/utils.ts`
- `src/locales/en.json`
- `tailwind.config.ts`
- `tsconfig.json`

## Validation Notes

- **warning** [docker] Dockerfile: Unknown base image: base (unresolved)
- **warning** [docker] Dockerfile: Unknown base image: base (unresolved)
- **warning** [docker] Dockerfile: Unknown base image: base (unresolved)
- **warning** [docker] Dockerfile: Dockerfile runs npm ci but no package-lock.json — may fail (unresolved)
- **warning** [dependency] package.json: Import '@/lib' not found in package.json dependencies (unresolved)
- **warning** [dependency] package.json: Import '@/components' not found in package.json dependencies (unresolved)

