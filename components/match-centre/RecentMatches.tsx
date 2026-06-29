'use client';

import type { NormalizedMatch } from '@/lib/matchService';
import EmptyMatchState from './EmptyMatchState';
import MatchCard from './MatchCard';
import MatchSkeleton from './MatchSkeleton';

type RecentMatchesProps = {
  matches: NormalizedMatch[];
  loading: boolean;
  sourceUrl: string;
  onSelect: (match: NormalizedMatch) => void;
};

export default function RecentMatches({ matches, loading, sourceUrl, onSelect }: RecentMatchesProps) {
  return (
    <section className="flex h-full min-h-[780px] flex-col rounded-[2.4rem] border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-2xl md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Recent</p>
          <h3 className="mt-2 text-3xl font-black uppercase text-white">Latest Results</h3>
        </div>
        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/76">Last 3</span>
      </div>

      <div className="flex-1 space-y-4">
        {loading ? <MatchSkeleton /> : matches.length ? matches.slice(0, 3).map((match) => <MatchCard key={match.id} match={match} type="recent" onSelect={onSelect} />) : (
          <EmptyMatchState title="No recent results available." description="CricHeroes did not expose public completed match data in the fetched page markup. Check the source profile for verified results." sourceUrl={sourceUrl} />
        )}
      </div>
    </section>
  );
}
