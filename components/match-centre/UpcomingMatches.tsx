'use client';

import type { NormalizedMatch } from '@/lib/matchService';
import EmptyMatchState from './EmptyMatchState';
import MatchCard from './MatchCard';
import MatchSkeleton from './MatchSkeleton';

type UpcomingMatchesProps = {
  matches: NormalizedMatch[];
  loading: boolean;
  sourceUrl: string;
  onSelect: (match: NormalizedMatch) => void;
};

export default function UpcomingMatches({ matches, loading, sourceUrl, onSelect }: UpcomingMatchesProps) {
  return (
    <section className="flex h-full min-h-[780px] flex-col rounded-[2.4rem] border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-2xl md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Upcoming</p>
          <h3 className="mt-2 text-3xl font-black uppercase text-white">Next Fixtures</h3>
        </div>
        <span className="rounded-full bg-falcon-orange/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-falcon-orange">Next 3</span>
      </div>

      <div className="flex-1 space-y-4">
        {loading ? <MatchSkeleton /> : matches.length ? matches.slice(0, 3).map((match) => <MatchCard key={match.id} match={match} type="upcoming" onSelect={onSelect} />) : (
          <EmptyMatchState title="No upcoming matches available." description="CricHeroes did not expose public upcoming match data in the fetched page markup. Check the source profile for live updates." sourceUrl={sourceUrl} />
        )}
      </div>
    </section>
  );
}
