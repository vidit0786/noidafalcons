# Match Centre Redesign

## Completed

- Rebuilt Match Centre only, preserving the rest of the website.
- Added reusable components:
  - `MatchCard`
  - `MatchModal`
  - `ScorecardModal`
  - `UpcomingMatches`
  - `RecentMatches`
  - skeleton and empty-state components
- Added `lib/matchService.ts` to fetch and normalize public CricHeroes match data.
- Added `/api/matches` route with caching/revalidation.
- Upcoming and Recent cards use equal-height containers and fixed balanced layout.
- Added graceful fallback states:
  - `No upcoming matches available.`
  - `No recent results available.`
- Added premium modal UI for upcoming fixture details and scorecard details.
- Match buttons point to the CricHeroes match tab URL as requested.

## Verification

- `npm run lint` passed.
- `npm run build` passed.
