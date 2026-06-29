'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { NormalizedMatch } from '@/lib/matchService';

type ScorecardModalProps = {
  match: NormalizedMatch | null;
  onClose: () => void;
};

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">{title}</p>
      {items?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">{items.map((item) => <li key={item}>{item}</li>)}</ul>
      ) : (
        <p className="mt-4 text-white/58">Not publicly available in fetched CricHeroes markup. Open CricHeroes for full details.</p>
      )}
    </div>
  );
}

export default function ScorecardModal({ match, onClose }: ScorecardModalProps) {
  return (
    <AnimatePresence>
      {match && (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#080808] p-5 shadow-glass md:p-8" initial={{ y: 28, scale: 0.96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 28, scale: 0.96, opacity: 0 }} onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-falcon-orange">Scorecard</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Noida Falcons vs {match.opponent}</h3>
                <p className="mt-3 text-white/62">{match.margin || match.result || 'Result available on CricHeroes'}</p>
              </div>
              <button type="button" onClick={onClose} className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-black">Close</button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ListBlock title="Innings Summary" items={match.details.inningsSummary} />
              <ListBlock title="Batting Scorecard" items={match.details.battingScorecard} />
              <ListBlock title="Bowling Figures" items={match.details.bowlingFigures} />
              <ListBlock title="Fall of Wickets" items={match.details.fallOfWickets} />
              <ListBlock title="Match Statistics" items={match.details.statistics} />
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Player of the Match</p>
                <p className="mt-4 text-white/70">{match.details.playerOfTheMatch || 'Not publicly available in fetched CricHeroes markup.'}</p>
              </div>
            </div>

            <a href={match.cricHeroesUrl} target="_blank" rel="noreferrer" className="premium-button mt-6 border border-falcon-orange bg-falcon-orange text-white shadow-glow">Open Full CricHeroes Scorecard</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
