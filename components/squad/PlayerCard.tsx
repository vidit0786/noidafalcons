'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SquadPlayer } from '@/types/player';
import { Badge } from '@/components/ui/badge';

interface PlayerCardProps {
  player: SquadPlayer;
  onSelect: (player: SquadPlayer) => void;
}

export default function PlayerCard({ player, onSelect }: PlayerCardProps) {
  return (
    <motion.button
      type="button"
      layout
      onClick={() => onSelect(player)}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -10, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-0 text-left shadow-glass backdrop-blur-xl outline-none transition duration-300 hover:border-falcon-blue/70 hover:shadow-blue-glow focus-visible:ring-2 focus-visible:ring-falcon-blue/80"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,77,155,.34),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.05),rgba(0,0,0,.72))]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-falcon-blue to-transparent opacity-70" />
      <div className="absolute -right-10 top-16 h-32 w-32 rounded-full border-[18px] border-falcon-blue/15" />
      <div className="absolute -left-10 bottom-20 h-32 w-32 rounded-full border-[18px] border-white/10" />

      <div className="relative flex h-[275px] items-end justify-center overflow-hidden pt-8">
        <motion.div className="relative h-[245px] w-[205px]" whileHover={{ scale: 1.04 }} transition={{ duration: 0.35 }}>
          <Image
            src={player.image}
            alt={`${player.name} placeholder cricketer silhouette`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
            className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,.55)]"
          />
        </motion.div>
      </div>

      <div className="relative -mt-2 p-5 transition duration-500 group-hover:-translate-y-2">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge className="border-falcon-blue/35 bg-falcon-blue/16 text-falcon-silver">#{player.jerseyNumber}</Badge>
          {player.isCaptain && <Badge className="border-falcon-blue/50 bg-falcon-blue/30 text-white shadow-blue-glow">Captain</Badge>}
        </div>

        <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-white">{player.name}</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-black/32 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Role</p>
            <p className="mt-1 font-bold text-white">{player.role}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/32 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-falcon-silver">Nation</p>
            <p className="mt-1 font-bold text-white">{player.nationality}</p>
          </div>
        </div>
        <p className="mt-4 translate-y-3 text-xs font-black uppercase tracking-[0.22em] text-falcon-blue opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Player Profile →
        </p>
      </div>
    </motion.button>
  );
}
