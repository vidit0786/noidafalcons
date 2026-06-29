'use client';

import { motion } from 'framer-motion';
import type { NormalizedMatch } from '@/lib/matchService';

type MatchCardProps = {
  match: NormalizedMatch;
  type: 'upcoming' | 'recent';
  onSelect: (match: NormalizedMatch) => void;
};

export default function MatchCard({ match, type, onSelect }: MatchCardProps) {
  const isUpcoming = type === 'upcoming';
  const statusText = isUpcoming ? 'Upcoming' : match.result ?? 'Completed';

  return (
    <motion.article
      layout
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/34 p-5 shadow-glass backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,106,0,.22),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(10,143,216,.14),transparent_30%)] opacity-75" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-falcon-orange/35 bg-falcon-orange/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-falcon-orange">
            {match.tournamentBadge || match.stage || 'Match'}
          </span>
          <span className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] ${isUpcoming ? 'bg-white/10 text-white' : match.result === 'Won' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-red-400/15 text-red-200'}`}>
            {statusText}
          </span>
        </div>

        <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">{match.tournament}</p>
        <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">
          Noida Falcons <span className="text-falcon-orange">vs</span> {match.opponent}
        </h3>

        <div className="mt-5 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Date</p>
            <p className="mt-1 font-bold text-white">{match.date || match.dateTimeLabel || 'TBA'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Time</p>
            <p className="mt-1 font-bold text-white">{match.time || match.dateTimeLabel || 'TBA'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 sm:col-span-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Ground</p>
            <p className="mt-1 font-bold text-white">{match.ground || 'Ground TBA'}{match.city ? `, ${match.city}` : ''}</p>
          </div>
          {!isUpcoming && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 sm:col-span-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Result</p>
              <p className="mt-1 font-bold text-white">{match.margin || match.result || 'Result available on CricHeroes'}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onSelect(match)}
          className="premium-button mt-5 w-full border border-white/12 bg-white/[0.075] text-white backdrop-blur-xl hover:border-falcon-orange/60 hover:bg-falcon-orange/80"
        >
          {isUpcoming ? 'View Match Details' : 'View Scorecard'}
        </button>
      </div>
    </motion.article>
  );
}
