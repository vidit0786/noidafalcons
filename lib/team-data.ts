export const teamInfo = {
  name: 'Noida Falcons',
  location: 'Noida',
  established: '27 Feb, 2019',
  teamId: '275516',
  tagline: 'Rise Above The Rest',
  logo: '/images/noida-falcons-official-logo.png',
  coverImage: '/images/noida-falcons-cover-team.jpg',
  cricHeroesUrl: 'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS',
  cricHeroesMatchesUrl: 'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS?tab=matches',
  instagram: 'https://www.instagram.com/noidafalcons?igsh=MXJoMHJ3ZDdkdnpsMw==',
  youtube: 'https://youtube.com/@noida.falcons?si=KpwhB61IEaSwGUFx',
};

export type Player = {
  name: string;
  slug: string;
  initials: string;
  role: string;
  jersey?: number;
  image?: string;
  isCaptain?: boolean;
  batting?: { innings: number; runs: number; average: number; strikeRate: number; rank?: number };
  bowling?: { innings: number; wickets: number; economy: number; average: number; rank?: number };
};

export const players: Player[] = [
  { name: 'Mayank Gubrele', slug: 'mayank-gubrele', role: 'Captain • Lead Batter', jersey: 23, initials: 'MG', isCaptain: true, image: '/images/players/mayank-gubrele.png', batting: { rank: 2, innings: 278, runs: 4981, average: 22.14, strikeRate: 127.46 } },
  { name: 'Vidit Sharma', slug: 'vidit-sharma', role: 'Bowler • Core Player', jersey: 5, initials: 'VS', image: '/images/players/vidit-sharma.png', bowling: { rank: 1, innings: 161, wickets: 251, economy: 7.78, average: 16.63 } },
  { name: 'Siddharth Pandit', slug: 'siddharth-pandit', role: 'All-Rounder', initials: 'SP', image: '/images/players/siddharth-pandit-bat.png', batting: { rank: 1, innings: 257, runs: 5539, average: 27.83, strikeRate: 134.93 }, bowling: { rank: 2, innings: 238, wickets: 212, economy: 7.67, average: 25.54 } },
  { name: 'Akshansh Tyagi', slug: 'akshansh-tyagi', role: 'Batter', initials: 'AT', image: '/images/players/akshansh-tyagi.png', batting: { rank: 3, innings: 188, runs: 4605, average: 28.96, strikeRate: 134.14 } },
  { name: 'Ashish Sharma', slug: 'ashish-sharma', role: 'Batter', initials: 'AS', image: '/images/players/ashish-sharma.png', batting: { rank: 4, innings: 88, runs: 3283, average: 40.04, strikeRate: 178.04 } },
  { name: 'Sanchit Jain', slug: 'sanchit-jain', role: 'Batter', initials: 'SJ', image: '/images/players/sanchit-jain.png', batting: { rank: 5, innings: 116, runs: 2719, average: 28.03, strikeRate: 135.07 } },
  { name: 'Yash Shadija', slug: 'yash-shadija', role: 'Batter', initials: 'YS', image: '/images/players/yash-shadija.png', batting: { rank: 6, innings: 68, runs: 2580, average: 43.73, strikeRate: 178.55 } },
  { name: 'Arun Faujdar', slug: 'arun-faujdar', role: 'Bowler', initials: 'AF', image: '/images/players/arun-faujdar.png', batting: { rank: 7, innings: 146, runs: 2136, average: 20.94, strikeRate: 168.99 }, bowling: { rank: 6, innings: 163, wickets: 146, economy: 8.25, average: 27.1 } },
  { name: 'Nitin Chauhan', slug: 'nitin-chauhan', role: 'Bowler', initials: 'NC', image: '/images/players/nitin-chauhan.png', bowling: { rank: 3, innings: 134, wickets: 171, economy: 7.94, average: 19.75 } },
  { name: 'Rahul Awana', slug: 'rahul-awana', role: 'Bowler', initials: 'RA', image: '/images/players/rahul-awana.png', bowling: { rank: 4, innings: 146, wickets: 166, economy: 7.96, average: 23.84 } },
  { name: 'Akshay Kumar', slug: 'akshay-kumar', role: 'Bowler', initials: 'AK', image: '/images/players/akshay-kumar.png', bowling: { rank: 5, innings: 163, wickets: 156, economy: 8.36, average: 27.28 } },
  { name: 'Shubham Agarwal', slug: 'shubham-agarwal', role: 'Bowler', initials: 'SA', image: '/images/players/shubham-agarwal.png', bowling: { rank: 7, innings: 111, wickets: 140, economy: 7.63, average: 18.1 } },
  { name: 'Abhishek Chauhan', slug: 'abhishek-chauhan', role: 'Squad Member', initials: 'AC' },
  { name: 'Manish Mishra', slug: 'manish-mishra', role: 'Squad Member', initials: 'MM' },
  { name: 'Rajat', slug: 'rajat', role: 'Squad Member', initials: 'R' },
  { name: 'Tariq', slug: 'tariq', role: 'Squad Member', initials: 'T' },
  { name: 'Pulak', slug: 'pulak', role: 'Squad Member', initials: 'P' },
  { name: 'Sanju Saini', slug: 'sanju-saini', role: 'Squad Member', initials: 'SS' },
  { name: 'Yatharth Bhardwaj', slug: 'yatharth-bhardwaj', role: 'Squad Member', initials: 'YB' },
  { name: 'Deep', slug: 'deep', role: 'Squad Member', initials: 'D' },
  { name: 'Navneet', slug: 'navneet', role: 'Squad Member', initials: 'N' },
  { name: 'Yash', slug: 'yash', role: 'Squad Member', initials: 'Y' },
];

export type Fixture = {
  id: string;
  opponent: string;
  stage: string;
  tournament: string;
  venue: string;
  location: string;
  startDateTime: string;
  status: 'upcoming' | 'completed';
  result?: string;
  score?: string;
};

export const fixtures: Fixture[] = [
  {
    id: 'oval-premier-final-2026-07-05',
    opponent: 'Delhi Dominators',
    stage: 'Final',
    tournament: 'The Oval Premier League',
    venue: 'Oval Cricket Ground 2',
    location: 'Noida',
    startDateTime: '2026-07-05T13:30:00+05:30',
    status: 'upcoming',
  },
];

export const battingLeaders = players
  .filter((player) => player.batting)
  .sort((a, b) => (b.batting?.runs ?? 0) - (a.batting?.runs ?? 0));

export const bowlingLeaders = players
  .filter((player) => player.bowling)
  .sort((a, b) => (b.bowling?.wickets ?? 0) - (a.bowling?.wickets ?? 0));

export const achievements = [
  { title: 'Team Established', year: '2019', description: 'Noida Falcons began their journey on CricHeroes on 27 Feb, 2019.' },
  { title: 'Finalists', year: '2026', description: 'Scheduled for The Oval Premier League Final vs Delhi Dominators.' },
  { title: 'Bowling Milestone', year: 'All-time', description: 'Vidit Sharma leads the bowling chart with 251 wickets.' },
];

export const gallery = [
  { src: '/images/noida-falcons-cover-team.jpg', alt: 'Noida Falcons trophy celebration', title: 'Trophy Celebration' },
  { src: '/images/noida-falcons-jersey-reference.png', alt: 'Noida Falcons orange jersey', title: 'Official Orange Kit' },
  { src: '/images/noida-falcons-team-qr.png', alt: 'Noida Falcons CricHeroes QR', title: 'CricHeroes Team QR' },
];

export const news = [
  {
    title: 'Falcons Prepare For Oval Premier League Final',
    description: 'Noida Falcons are scheduled to face Delhi Dominators in the final at Oval Cricket Ground 2, Noida.',
    tag: 'Match Centre',
    date: '27 Jun 2026',
  },
  {
    title: 'Mayank Gubrele Leads The Falcons',
    description: 'Captain Mayank Gubrele continues to anchor the team identity in the number 23 jersey.',
    tag: 'Team Update',
    date: '25 Jun 2026',
  },
  {
    title: 'Vidit Sharma Tops Bowling Chart',
    description: 'Vidit Sharma leads the CricHeroes bowling leaderboard with 251 wickets for the Falcons.',
    tag: 'Leaderboard',
    date: '23 Jun 2026',
  },
];
