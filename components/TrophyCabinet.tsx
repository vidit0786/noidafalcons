'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/team-data';
import SectionHeader from './SectionHeader';

export default function TrophyCabinet() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-[-7rem] top-10 h-96 w-96 rounded-full bg-falcon-orange/15 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader eyebrow="Trophy Cabinet" title="Milestones & Achievements" description="A premium cabinet for public milestones, finals, and team achievements. This is ready to expand as the Falcons add trophies and records." />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-glass backdrop-blur-xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-falcon-orange/15 text-3xl shadow-glow">🏆</div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-falcon-silver">{item.year}</p>
              <h3 className="mt-3 text-2xl font-black uppercase text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/66">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
