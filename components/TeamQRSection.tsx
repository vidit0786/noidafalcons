'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function TeamQRSection() {
  return (
    <section id="team-qr" className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-falcon-orange/15 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Team QR"
          title="Find Noida Falcons Easily"
          description="Scan the official team QR to find Noida Falcons, connect with the squad, and discover team information."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div
            className="mx-auto w-full max-w-md overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.06] p-4 shadow-glass backdrop-blur-xl"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/noida-falcons-team-qr.png"
              alt="Noida Falcons team QR code"
              width={1080}
              height={1512}
              className="rounded-[1.75rem] bg-white object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Team ID</p>
              <p className="mt-2 font-display text-5xl font-black text-white">275516</p>
              <p className="mt-4 leading-7 text-white/66">
                Use this QR as the official discovery card for Noida Falcons. Players and opponents can scan it to find the team quickly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-white/10 bg-black/36 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Location</p>
                <p className="mt-2 text-xl font-black text-white">Noida</p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-black/36 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Established</p>
                <p className="mt-2 text-xl font-black text-white">2019</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-falcon-orange/30 bg-falcon-orange/10 p-6 shadow-glow backdrop-blur-xl">
              <p className="font-black uppercase tracking-[0.18em] text-white">CricHeroes Team Profile</p>
              <p className="mt-3 leading-7 text-white/68">
                Open the Noida Falcons CricHeroes profile for live fixtures, scorecards, and detailed player records.
              </p>
              <a
                href="https://cricheroes.com/team-profile/275516/NOIDA-FALCONS"
                target="_blank"
                rel="noreferrer"
                className="premium-button mt-5 border border-white/16 bg-white/[0.08] text-white backdrop-blur-xl hover:border-falcon-orange/60 hover:bg-falcon-orange/80"
              >
                Open CricHeroes
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
