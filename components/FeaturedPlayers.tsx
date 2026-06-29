'use client';

import { motion } from 'framer-motion';
import { players, teamInfo } from '@/lib/team-data';
import SectionHeader from './SectionHeader';
import PlayerAvatar from './ui/PlayerAvatar';

function PlayerVisual({ name, initials, number, isCaptain, image }: { name: string; initials: string; number?: number; isCaptain?: boolean; image?: string }) {
  return (
    <div className="relative mx-auto h-56 w-full overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-[#151515] via-[#21140d] to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,106,0,.34),transparent_28%),radial-gradient(circle_at_78%_76%,rgba(10,143,216,.22),transparent_34%)]" />
      <div className="absolute left-5 top-7 space-y-2 opacity-80">
        <span className="block h-1.5 w-24 rotate-[-15deg] rounded-full bg-falcon-sky shadow-blue-glow" />
        <span className="block h-1.5 w-20 rotate-[-15deg] rounded-full bg-falcon-sky/90" />
        <span className="block h-1.5 w-16 rotate-[-15deg] rounded-full bg-falcon-sky/75" />
      </div>

      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
        <PlayerAvatar name={name} image={image} size="lg" className="border-4 border-white/20" />
      </div>

      <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Initials</p>
        <p className="text-lg font-black text-white">{initials}</p>
      </div>
      <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-black/45 px-3 py-2 text-right backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Jersey</p>
        <p className="text-lg font-black text-white">{number ? `#${number}` : '—'}</p>
      </div>
      {isCaptain && (
        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-falcon-orange/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-glow backdrop-blur-xl">
          Captain
        </div>
      )}
    </div>
  );
}

export default function FeaturedPlayers() {
  return (
    <section id="squad" className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="absolute right-[-7rem] top-12 h-96 w-96 rounded-full bg-falcon-orange/20 blur-3xl" aria-hidden="true" />
      <div className="absolute left-[-8rem] bottom-12 h-80 w-80 rounded-full bg-falcon-sky/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Full Squad"
          title="Noida Falcons Team Members"
          description="Complete Noida Falcons squad with CricHeroes-inspired player cards, clean placeholders, and individual profile pages."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player, index) => (
            <motion.article
              key={player.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-xl"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.35), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -9, scale: 1.015 }}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-[-40%] top-0 h-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              <PlayerVisual name={player.name} initials={player.initials} number={player.jersey} isCaptain={player.isCaptain} image={player.image} />
              <div className="p-3 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">{player.name}</h3>
                    <p className="mt-1 text-sm font-medium text-falcon-silver/85">{player.role}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/46">No.</p>
                    <p className="text-xl font-black text-white">{player.jersey ?? '—'}</p>
                  </div>
                </div>
                <a
                  href={teamInfo.cricHeroesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.2em] text-falcon-orange transition hover:text-white"
                >
                  View CricHeroes Profile →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
