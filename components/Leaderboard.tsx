'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { battingLeaders, bowlingLeaders, teamInfo } from '@/lib/team-data';
import SectionHeader from './SectionHeader';
import PlayerAvatar from './ui/PlayerAvatar';

type Tab = 'batting' | 'bowling';

export default function Leaderboard() {
  const [tab, setTab] = useState<Tab>('batting');
  const activeClass = 'bg-falcon-orange text-white shadow-glow';
  const inactiveClass = 'bg-white/[0.07] text-white/66 hover:bg-white/[0.12] hover:text-white';
  const isBatting = tab === 'batting';
  const titleLabel = isBatting ? 'Top runs scorers' : 'Most wickets';

  return (
    <section id="leaderboard" className="section-padding relative overflow-hidden">
      <div className="absolute left-[-8rem] top-20 h-96 w-96 rounded-full bg-falcon-orange/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-[-7rem] h-80 w-80 rounded-full bg-falcon-sky/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="CricHeroes Leaderboard"
          title="Top Falcons Performers"
          description="Batting is sorted by most runs. Bowling is sorted by most wickets, using public CricHeroes data and user-provided screenshots."
        />

        <div className="mx-auto mb-7 flex w-fit rounded-full border border-white/10 bg-black/30 p-1.5 shadow-glass backdrop-blur-xl">
          {(['batting', 'bowling'] as Tab[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${tab === item ? activeClass : inactiveClass}`}
              aria-pressed={tab === item}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div
          className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] shadow-glass backdrop-blur-xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-b border-white/10 bg-black/34 px-5 py-4 md:px-7">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">{titleLabel}</p>
          </div>

          {isBatting ? (
            <>
              <div className="grid grid-cols-[.5fr_1.65fr_.7fr_.8fr] gap-3 border-b border-white/10 bg-black/20 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-falcon-silver md:grid-cols-[.45fr_2fr_.8fr_.9fr_.8fr_.8fr] md:px-7">
                <span>#</span><span>Batter</span><span>Inn</span><span>Runs</span><span className="hidden md:block">Avg</span><span className="hidden md:block">SR</span>
              </div>
              <div className="divide-y divide-white/10">
                {battingLeaders.map((player, index) => (
                  <motion.div key={player.slug} className="group grid grid-cols-[.5fr_1.65fr_.7fr_.8fr] items-center gap-3 px-5 py-4 transition hover:bg-white/[0.055] md:grid-cols-[.45fr_2fr_.8fr_.9fr_.8fr_.8fr] md:px-7" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.045 }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-sm font-black text-white group-hover:border-falcon-orange/55 group-hover:bg-falcon-orange/80 group-hover:shadow-glow">{String(index + 1).padStart(2, '0')}</div>
                    <a href={teamInfo.cricHeroesUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                      <PlayerAvatar name={player.name} image={player.image} size="md" />
                      <div><p className="font-black uppercase tracking-tight text-white">{player.name}</p><p className="text-xs font-bold uppercase tracking-[0.18em] text-falcon-silver">Most runs</p></div>
                    </a>
                    <p className="font-display text-xl font-black text-white">{player.batting?.innings}</p>
                    <p className="font-display text-2xl font-black text-falcon-orange">{player.batting?.runs}</p>
                    <p className="hidden text-lg font-black text-white/78 md:block">{player.batting?.average}</p>
                    <p className="hidden text-lg font-black text-white/78 md:block">{player.batting?.strikeRate}</p>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-[.5fr_1.65fr_.7fr_.7fr] gap-3 border-b border-white/10 bg-black/20 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-falcon-silver md:grid-cols-[.45fr_2fr_.8fr_.8fr_.8fr_.8fr] md:px-7">
                <span>#</span><span>Bowler</span><span>Inn</span><span>Wkts</span><span className="hidden md:block">Eco</span><span className="hidden md:block">Avg</span>
              </div>
              <div className="divide-y divide-white/10">
                {bowlingLeaders.map((player, index) => (
                  <motion.div key={player.slug} className="group grid grid-cols-[.5fr_1.65fr_.7fr_.7fr] items-center gap-3 px-5 py-4 transition hover:bg-white/[0.055] md:grid-cols-[.45fr_2fr_.8fr_.8fr_.8fr_.8fr] md:px-7" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.045 }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-sm font-black text-white group-hover:border-falcon-orange/55 group-hover:bg-falcon-orange/80 group-hover:shadow-glow">{String(index + 1).padStart(2, '0')}</div>
                    <a href={teamInfo.cricHeroesUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                      <PlayerAvatar name={player.name} image={player.image} size="md" />
                      <div><p className="font-black uppercase tracking-tight text-white">{player.name}</p><p className="text-xs font-bold uppercase tracking-[0.18em] text-falcon-silver">Most wickets</p></div>
                    </a>
                    <p className="font-display text-xl font-black text-white">{player.bowling?.innings}</p>
                    <p className="font-display text-2xl font-black text-falcon-orange">{player.bowling?.wickets}</p>
                    <p className="hidden text-lg font-black text-white/78 md:block">{player.bowling?.economy}</p>
                    <p className="hidden text-lg font-black text-white/78 md:block">{player.bowling?.average}</p>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
