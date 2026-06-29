'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { squadFilters, squadPlayers } from '@/data/players';
import type { PlayerRole, SquadPlayer } from '@/types/player';
import { Button } from '@/components/ui/button';
import PlayerCard from './PlayerCard';
import PlayerModal from './PlayerModal';

type ActiveFilter = 'All Players' | PlayerRole;

export default function SquadSection() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('All Players');
  const [selectedPlayer, setSelectedPlayer] = useState<SquadPlayer | null>(null);

  const filteredPlayers = useMemo(() => {
    if (activeFilter === 'All Players') return squadPlayers;
    return squadPlayers.filter((player) => player.role === activeFilter);
  }, [activeFilter]);

  return (
    <section id="squad-grid" className="section-padding relative overflow-hidden bg-falcon-midnight">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(10,77,155,.32),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(192,192,192,.1),transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:54px_54px]" aria-hidden="true" />
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-falcon-blue/20 blur-3xl" aria-hidden="true" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-4xl text-center md:mb-14"
        >
          <span className="eyebrow">Falcon Roster</span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Noida Falcons Squad
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
            Meet the warriors who represent the Falcon spirit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-3 rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-glass backdrop-blur-xl"
          role="tablist"
          aria-label="Squad role filters"
        >
          {squadFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <Button
                key={filter.value}
                type="button"
                variant={isActive ? 'default' : 'ghost'}
                onClick={() => setActiveFilter(filter.value)}
                aria-selected={isActive}
                role="tab"
                className="min-w-fit"
              >
                {filter.label}
              </Button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} onSelect={setSelectedPlayer} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </section>
  );
}
