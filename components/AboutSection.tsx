'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import TeamLogo from './TeamLogo';

const pillars = [
  {
    title: 'Team Introduction',
    body: 'Noida Falcons represents the energy, ambition, and modern sporting culture of Noida. The franchise blends local pride with elite cricketing standards.',
  },
  {
    title: 'Club Vision',
    body: 'To become India’s most admired modern cricket franchise by developing fearless talent and creating unforgettable matchday experiences.',
  },
  {
    title: 'Mission Statement',
    body: 'Play bold cricket, uplift the community, and inspire the next generation to rise above every challenge with Falcon spirit.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-falcon-orange/20 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="About The Team"
          title="Built To Soar Under Pressure"
          description="A premium cricket brand for a fast-growing city — Noida Falcons is designed around excellence, discipline, entertainment, and community pride."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,.42),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.12),transparent_28%)]" />
            <div className="absolute inset-x-8 bottom-8 h-44 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(20,130,75,.48),rgba(7,24,17,.72)_60%,transparent_74%)]" />
            <div className="absolute bottom-20 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute left-8 top-8 rounded-3xl border border-white/10 bg-black/36 px-5 py-4 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-falcon-silver">Established</p>
              <p className="mt-1 text-3xl font-black text-white">2019</p>
            </div>
            <motion.div
              className="absolute left-1/2 top-[48%] w-[76%] -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-black/34 p-3 shadow-glass backdrop-blur-xl">
                <div className="absolute inset-[-42px] rounded-full bg-falcon-orange/30 blur-3xl" />
                <Image
                  src="/images/noida-falcons-jersey-reference.png"
                  alt="Noida Falcons orange team jersey design"
                  width={838}
                  height={599}
                  className="relative rounded-[1.5rem] object-cover"
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                  Official Kit
                </div>
                <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-2 backdrop-blur-xl">
                  <TeamLogo showText={false} size="sm" />
                </div>
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-falcon-orange/55 hover:bg-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-falcon-orange/20 text-sm font-black text-white ring-1 ring-falcon-orange/35 group-hover:bg-falcon-orange/80 group-hover:shadow-glow">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{pillar.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
