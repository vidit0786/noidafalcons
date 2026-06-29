# Noida Falcons Website Audit & Upgrade Notes

## Current Release Focus

This iteration upgrades the existing project rather than rebuilding it. It introduces a scalable data layer, richer routing, improved SEO, premium sections, and reusable player/match components.

## CricHeroes Data Strategy

CricHeroes public profile: https://cricheroes.com/team-profile/275516/NOIDA-FALCONS

Direct automated scraping is limited by CricHeroes/Cloudflare rendering. The website now uses a central typed data source at `lib/team-data.ts`, making future API/JSON sync straightforward without redesigning UI components.

## Major Improvements

- Centralized team, player, fixture, leaderboard, news, gallery, and achievement data in `lib/team-data.ts`.
- Added SSG player profile pages at `/players/[slug]`.
- Added standalone `/squad` and `/matches` pages.
- Added Match Centre with upcoming/completed views.
- Added Trophy Cabinet section.
- Added Gallery with lightbox.
- Added reusable `PlayerAvatar` component with accessible fallback icon.
- Improved SEO metadata, canonical, Open Graph image and structured data.
- Preserved orange Noida Falcons identity, official logo, jersey assets, QR, and social links.
- Verified `npm run lint` and `npm run build`.

## Next Recommended Work

1. Replace screenshot-cropped player photos with proper source player images.
2. Add a small admin/data JSON workflow or API route for CricHeroes sync if credentials/API become available.
3. Add more real recent match scorecards and trophy data.
4. Add sponsor logo assets when official sponsors are finalized.
