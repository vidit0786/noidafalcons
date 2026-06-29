# Squad Data Update - CricHeroes Players

## Completed

Replaced the 15 dummy squad players with Noida Falcons players collected from the public CricHeroes roster/leaderboard data shared and discovered earlier.

## Data file changed

- `data/players.ts`

## Players now used

- Mayank Gubrele
- Vidit Sharma
- Siddharth Pandit
- Akshansh Tyagi
- Ashish Sharma
- Sanchit Jain
- Yash Shadija
- Arun Faujdar
- Nitin Chauhan
- Rahul Awana
- Akshay Kumar
- Shubham Agarwal
- Abhishek Chauhan
- Manish Mishra
- Rajat
- Tariq
- Pulak
- Sanju Saini
- Yatharth Bhardwaj
- Deep
- Navneet
- Yash

## Notes

- Player images are used where we already have them from CricHeroes screenshots.
- Remaining players use the professional placeholder cricketer silhouette.
- Known stats from batting/bowling leaderboards were mapped into the player modal.
- Unknown stats are set to `0` until public data is available.

## Verification

- `npm run lint` passed.
- `npm run build` passed.
