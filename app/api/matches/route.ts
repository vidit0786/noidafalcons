import { NextResponse } from 'next/server';
import { fetchAndParseCricHeroesMatches } from '@/lib/matchService';

export const revalidate = 900;

const CRICHEROES_MATCH_URL = 'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS?tab=matches';

export async function GET() {
  const data = await fetchAndParseCricHeroesMatches([CRICHEROES_MATCH_URL]);
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 's-maxage=900, stale-while-revalidate=3600',
    },
  });
}
