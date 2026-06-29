export type MatchStatus = 'upcoming' | 'completed';

export type MatchTeam = {
  name: string;
  score?: string;
};

export type MatchDetails = {
  toss?: string;
  squad?: string[];
  liveStatus?: string;
  notes?: string[];
  inningsSummary?: string[];
  battingScorecard?: string[];
  bowlingFigures?: string[];
  fallOfWickets?: string[];
  playerOfTheMatch?: string;
  statistics?: string[];
};

export type NormalizedMatch = {
  id: string;
  status: MatchStatus;
  tournament: string;
  tournamentBadge: string;
  teamA: MatchTeam;
  teamB: MatchTeam;
  opponent: string;
  date?: string;
  time?: string;
  dateTimeLabel?: string;
  ground?: string;
  city?: string;
  stage?: string;
  result?: 'Won' | 'Lost' | 'Draw' | 'No Result' | 'Unknown';
  margin?: string;
  matchUrl: string;
  cricHeroesUrl: string;
  details: MatchDetails;
};

export type MatchServiceResult = {
  upcoming: NormalizedMatch[];
  recent: NormalizedMatch[];
  sourceUrl: string;
  fetchedAt: string;
  parseWarning?: string;
};

const TEAM_NAME = 'NOIDA FALCONS';
const DEFAULT_SOURCE_URL = 'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS?tab=matches';

function cleanText(value: string) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim();
}

function stripHtml(html: string) {
  return cleanText(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' · ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"'),
  );
}

function makeId(input: string, index: number) {
  return `${input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80)}-${index}`;
}

function getOpponent(teamA: string, teamB: string) {
  const aIsFalcons = teamA.toUpperCase().includes(TEAM_NAME);
  const bIsFalcons = teamB.toUpperCase().includes(TEAM_NAME);
  if (aIsFalcons) return teamB;
  if (bIsFalcons) return teamA;
  return teamA.includes('Falcons') ? teamB : teamA;
}

function inferResult(resultText: string): NormalizedMatch['result'] {
  const upper = resultText.toUpperCase();
  if (!resultText) return 'Unknown';
  if (upper.includes('TIED') || upper.includes('DRAW')) return 'Draw';
  if (upper.includes('NO RESULT') || upper.includes('ABANDONED')) return 'No Result';
  if (upper.includes(TEAM_NAME) && upper.includes('WON')) return 'Won';
  if (upper.includes('WON')) return 'Lost';
  return 'Unknown';
}

function splitSections(text: string, marker: 'UPCOMING' | 'PAST') {
  const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`([^·]{3,160}?)\\s*·\\s*${escaped}\\s*·\\s*([\\s\\S]*?)(?=\\s*·\\s*(?:UPCOMING|PAST|ONGOING|LOAD MORE|Want to get|Score all|ABOUT|$))`, 'gi');
  const sections: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    sections.push(cleanText(`${match[1]} · ${match[2]}`));
  }

  return sections;
}

function parseUpcomingSection(section: string, index: number, sourceUrl: string): NormalizedMatch | null {
  const parts = section.split('·').map(cleanText).filter(Boolean);
  if (parts.length < 4) return null;

  const statusIndex = parts.findIndex((part) => /UPCOMING/i.test(part));
  const usable = statusIndex >= 0 ? parts : ['UPCOMING', ...parts];

  const scheduled = usable.find((part) => /Match scheduled at/i.test(part));
  const teamCandidates = usable.filter((part) => !/UPCOMING|Match scheduled at|\d{1,2}-[A-Za-z]{3}-\d{2}|\d+\s*Ov|League Matches|Final|Semi Final|Quarter Final|Warm up/i.test(part));

  const teamA = teamCandidates[1] ?? TEAM_NAME;
  const teamB = teamCandidates[2] ?? 'Opponent TBA';
  const opponent = getOpponent(teamA, teamB);
  const stage = usable.find((part) => /Final|Semi Final|Quarter Final|League Matches|Warm up/i.test(part)) ?? 'Upcoming';
  const date = usable.find((part) => /\d{1,2}-[A-Za-z]{3}-\d{2}/.test(part));
  const overs = usable.find((part) => /\d+\s*Ov/i.test(part));
  const groundCity = usable[0] ?? '';
  const [ground = '', city = ''] = groundCity.split(',').map(cleanText);
  const tournament = usable[usable.length - 1] && !/Match scheduled|UPCOMING/i.test(usable[usable.length - 1]) ? usable[usable.length - 1] : 'CricHeroes Fixture';

  return {
    id: makeId(`${tournament}-${teamA}-${teamB}-${date ?? scheduled ?? index}`, index),
    status: 'upcoming',
    tournament,
    tournamentBadge: stage.replace(/ Matches/i, ''),
    teamA: { name: teamA },
    teamB: { name: teamB },
    opponent,
    date,
    time: scheduled?.replace(/Match scheduled at/i, '').trim(),
    dateTimeLabel: scheduled?.replace(/Match scheduled at/i, '').trim() ?? date,
    ground,
    city,
    stage,
    matchUrl: sourceUrl,
    cricHeroesUrl: sourceUrl,
    details: {
      liveStatus: 'Upcoming',
      notes: [overs, scheduled, 'Open CricHeroes for live squad, toss and scoring updates.'].filter(Boolean) as string[],
    },
  };
}

function parsePastSection(section: string, index: number, sourceUrl: string): NormalizedMatch | null {
  const parts = section.split('·').map(cleanText).filter(Boolean);
  if (parts.length < 5) return null;

  const stage = parts.find((part) => /Final|Semi Final|Quarter Final|League Matches|Warm up/i.test(part)) ?? 'Completed';
  const date = parts.find((part) => /\d{1,2}-[A-Za-z]{3}-\d{2}/.test(part));
  const groundCity = parts[0] ?? '';
  const [ground = '', city = ''] = groundCity.split(',').map(cleanText);
  const resultText = parts.find((part) => /won by|tied|abandoned|no result/i.test(part)) ?? '';
  const scoreParts = parts.filter((part) => /\(\d+\.?\d*\)/.test(part));
  const teamNames = parts.filter((part) => !/PAST|\d{1,2}-[A-Za-z]{3}-\d{2}|\d+\s*Ov|League Matches|Final|Semi Final|Quarter Final|won by|tied|abandoned|no result|\(\d+\.?\d*\)/i.test(part));
  const teamA = teamNames[1] ?? TEAM_NAME;
  const teamB = teamNames[2] ?? 'Opponent TBA';
  const opponent = getOpponent(teamA, teamB);
  const tournament = parts[parts.length - 1] && !/PAST|won by|\(\d+\.?\d*\)/i.test(parts[parts.length - 1]) ? parts[parts.length - 1] : 'CricHeroes Match';

  return {
    id: makeId(`${tournament}-${teamA}-${teamB}-${date ?? index}`, index),
    status: 'completed',
    tournament,
    tournamentBadge: stage.replace(/ Matches/i, ''),
    teamA: { name: teamA, score: scoreParts[0] },
    teamB: { name: teamB, score: scoreParts[1] },
    opponent,
    date,
    dateTimeLabel: date,
    ground,
    city,
    stage,
    result: inferResult(resultText),
    margin: resultText.replace(/^.*?won by/i, 'Won by').trim() || resultText,
    matchUrl: sourceUrl,
    cricHeroesUrl: sourceUrl,
    details: {
      inningsSummary: scoreParts,
      statistics: [resultText].filter(Boolean),
      notes: ['Open CricHeroes for complete batting, bowling, fall of wickets and MVP details.'],
    },
  };
}

export async function fetchAndParseCricHeroesMatches(urls: string[] = [DEFAULT_SOURCE_URL]): Promise<MatchServiceResult> {
  const sourceUrl = urls[0] ?? DEFAULT_SOURCE_URL;
  const fetchedAt = new Date().toISOString();

  try {
    const response = await fetch(sourceUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; NoidaFalconsWebsite/1.0)',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return { upcoming: [], recent: [], sourceUrl, fetchedAt, parseWarning: `CricHeroes returned ${response.status}` };
    }

    const html = await response.text();
    if (/cloudflare|just a moment|attention required|enable cookies/i.test(html)) {
      return { upcoming: [], recent: [], sourceUrl, fetchedAt, parseWarning: 'CricHeroes page is protected or requires browser rendering.' };
    }

    const text = stripHtml(html);
    const upcoming = splitSections(text, 'UPCOMING').map((section, index) => parseUpcomingSection(section, index, sourceUrl)).filter(Boolean).slice(0, 3) as NormalizedMatch[];
    const recent = splitSections(text, 'PAST').map((section, index) => parsePastSection(section, index, sourceUrl)).filter(Boolean).slice(0, 3) as NormalizedMatch[];

    return {
      upcoming,
      recent,
      sourceUrl,
      fetchedAt,
      parseWarning: upcoming.length || recent.length ? undefined : 'No public match data was found in the fetched CricHeroes markup.',
    };
  } catch (error) {
    return {
      upcoming: [],
      recent: [],
      sourceUrl,
      fetchedAt,
      parseWarning: error instanceof Error ? error.message : 'Failed to fetch CricHeroes data.',
    };
  }
}
