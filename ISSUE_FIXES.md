# Issue Fixes - Match Links, Results, Profiles, Home Ground

## Fixed

- Removed the incorrect recent result entry from the website data.
- Recent Results now shows an empty/verification state until a latest public CricHeroes result is confirmed.
- Removed the Home Ground card from the About section.
- Changed squad card profile links to open CricHeroes instead of the internal website profile page.
- Added exact CricHeroes profile URL for Vidit Sharma where publicly known.
- Added optional `cricHeroesProfileUrl` field in `lib/team-data.ts` for every player so exact player links can be added later.
- Added optional `matchUrl` field in fixture data. Match Centre and Upcoming Match buttons now use this field for direct match opening when available.
- Updated Match Centre cards to include direct match/scorecard link buttons.

## Still Needed From CricHeroes

CricHeroes did not expose the direct upcoming match scorecard URL publicly through the accessible page/search results. Add the exact match URL in `fixtures[].matchUrl` when available.

For exact player redirects for all squad members, add each player's CricHeroes profile URL in `players[].cricHeroesProfileUrl`.
