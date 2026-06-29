'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { NormalizedMatch } from '@/lib/matchService';

type MatchModalProps = {
  match: NormalizedMatch | null;
  onClose: () => void;
};

function DetailRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-falcon-silver">{label}</p>
      <p className="mt-2 font-bold text-white">{value || 'Not publicly available'}</p>
    </div>
  );
}

export default function MatchModal({ match, onClose }: MatchModalProps) {
  return (
    <AnimatePresence>
      {match && (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#080808] p-5 shadow-glass md:p-8" initial={{ y: 28, scale: 0.96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 28, scale: 0.96, opacity: 0 }} onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-falcon-orange">{match.tournament}</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Noida Falcons vs {match.opponent}</h3>
              </div>
              <button type="button" onClick={onClose} className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-black">Close</button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <DetailRow label="Teams" value={`${match.teamA.name} vs ${match.teamB.name}`} />
              <DetailRow label="Status" value={match.details.liveStatus || match.status} />
              <DetailRow label="Date" value={match.date || match.dateTimeLabel} />
              <DetailRow label="Time" value={match.time || match.dateTimeLabel} />
              <DetailRow label="Venue" value={`${match.ground || 'Venue TBA'}${match.city ? `, ${match.city}` : ''}`} />
              <DetailRow label="Toss" value={match.details.toss} />
              <DetailRow label="Tournament" value={match.tournament} />
              <DetailRow label="Stage" value={match.stage} />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Match Notes</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
                {(match.details.notes?.length ? match.details.notes : ['Public toss, squad and live status details will appear on CricHeroes when available.']).map((note) => <li key={note}>{note}</li>)}
              </ul>
            </div>

            <a href={match.cricHeroesUrl} target="_blank" rel="noreferrer" className="premium-button mt-6 border border-falcon-orange bg-falcon-orange text-white shadow-glow">Open CricHeroes Match Link</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
