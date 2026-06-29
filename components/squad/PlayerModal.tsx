'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { SquadPlayer } from '@/types/player';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PlayerModalProps {
  player: SquadPlayer | null;
  onClose: () => void;
}

function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-center">
      <p className="font-display text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-falcon-silver">{label}</p>
    </div>
  );
}

export default function PlayerModal({ player, onClose }: PlayerModalProps) {
  return (
    <AnimatePresence>
      {player && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2.4rem] border border-white/12 bg-[#070707] shadow-glass"
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(10,77,155,.32),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,.08),transparent_30%)]" />
            <div className="relative grid gap-8 p-6 md:grid-cols-[.85fr_1.15fr] md:p-8">
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,77,155,.2),rgba(0,0,0,.84))]" />
                <Image src={player.image} alt={`${player.name} large placeholder`} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-contain object-bottom p-8" />
                <div className="absolute left-5 top-5 flex gap-2">
                  <Badge className="border-falcon-blue/40 bg-falcon-blue/20 text-white">#{player.jerseyNumber}</Badge>
                  {player.isCaptain && <Badge className="border-falcon-blue/50 bg-falcon-blue/40 text-white">Captain</Badge>}
                </div>
              </div>

              <div className="py-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-blue">Noida Falcons</p>
                    <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-6xl">{player.name}</h2>
                    <p className="mt-3 text-lg font-semibold text-falcon-silver">{player.role} • {player.nationality}</p>
                  </div>
                  <Button variant="ghost" onClick={onClose} aria-label="Close player profile modal">Close</Button>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-falcon-silver">Batting Style</p>
                    <p className="mt-2 font-bold text-white">{player.battingStyle}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-falcon-silver">Bowling Style</p>
                    <p className="mt-2 font-bold text-white">{player.bowlingStyle}</p>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-white/70">{player.biography}</p>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <StatBox label="Matches" value={player.matches} />
                  <StatBox label="Runs" value={player.runs} />
                  <StatBox label="Wickets" value={player.wickets} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
