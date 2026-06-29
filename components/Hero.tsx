'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TeamLogo from './TeamLogo';

const particles = [
  { left: '8%', top: '22%', delay: 0.1, size: 5 },
  { left: '17%', top: '67%', delay: 0.9, size: 3 },
  { left: '29%', top: '31%', delay: 0.4, size: 4 },
  { left: '41%', top: '18%', delay: 1.1, size: 3 },
  { left: '54%', top: '76%', delay: 0.2, size: 5 },
  { left: '69%', top: '26%', delay: 0.8, size: 4 },
  { left: '83%', top: '61%', delay: 0.5, size: 3 },
  { left: '93%', top: '35%', delay: 1.3, size: 5 },
];

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

function StadiumBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,106,0,.38),transparent_34%),linear-gradient(180deg,rgba(0,0,0,.2)_0%,#050505_92%)]" />
      <div className="absolute inset-x-[-10%] bottom-[10%] h-[42%] rounded-[100%_100%_0_0] border-t border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,.22),rgba(255,106,0,.14)_38%,transparent_70%)] opacity-80" />
      <div className="absolute inset-x-[-8%] bottom-[15%] h-28 rounded-[50%] border-t border-white/10 bg-gradient-to-b from-white/10 to-transparent blur-[1px]" />
      <div className="absolute bottom-[18%] left-1/2 h-[1px] w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="absolute left-[8%] top-[9%] h-[56%] w-1 origin-bottom rotate-[18deg] bg-gradient-to-b from-white/45 via-falcon-orange/20 to-transparent blur-[1px]" />
      <div className="absolute left-[4%] top-[7%] h-16 w-40 rotate-[18deg] rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-[8%] top-[9%] h-[56%] w-1 origin-bottom -rotate-[18deg] bg-gradient-to-b from-white/45 via-falcon-orange/20 to-transparent blur-[1px]" />
      <div className="absolute right-[4%] top-[7%] h-16 w-40 -rotate-[18deg] rounded-full bg-white/45 blur-3xl" />
      <div className="absolute left-[22%] top-[14%] h-36 w-36 rounded-full bg-falcon-orange/25 blur-3xl" />
      <div className="absolute right-[22%] top-[14%] h-36 w-36 rounded-full bg-falcon-orange/25 blur-3xl" />

      <div className="absolute inset-x-0 bottom-0 h-[31%] bg-[linear-gradient(180deg,transparent,rgba(10,10,10,.86)_34%,#050505_100%)]" />
      <div className="absolute bottom-0 left-1/2 h-[19%] w-[72%] -translate-x-1/2 rounded-t-[100%] bg-[radial-gradient(ellipse_at_center,rgba(20,130,75,.5),rgba(4,24,14,.8)_58%,transparent_72%)] opacity-70" />
      <div className="absolute bottom-[4%] left-1/2 h-[10%] w-[40%] -translate-x-1/2 rounded-[100%] border border-white/10 bg-white/[0.03]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <StadiumBackground />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,.5)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}

      <div className="container-page relative z-10 grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_.95fr] lg:pb-0">
        <motion.div variants={textContainer} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={reveal} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow">Official Franchise Home</span>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Noida <span className="block bg-gradient-to-r from-white via-falcon-orange to-falcon-sky bg-clip-text text-transparent">Falcons</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-xl font-semibold uppercase tracking-[0.28em] text-falcon-silver sm:text-2xl"
          >
            Rise Above The Rest
          </motion.p>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
          >
The Official Home of Noida&apos;s Premier Cricket Franchise. Powered by our blazing orange jersey, sky-blue speed lines, fearless leadership, and a city ready to fly.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#squad"
              className="premium-button border border-falcon-orange bg-falcon-orange text-white shadow-glow"
            >
              Explore Squad
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#matches"
              className="premium-button border border-white/16 bg-white/[0.075] text-white backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.11]"
            >
              Latest Matches
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-[520px] lg:block"
          initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-radial-blue blur-2xl" />
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-[3rem] border border-white/12 bg-white/[0.055] p-3 shadow-glass backdrop-blur-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/noida-falcons-cover-team.jpg"
              alt="Noida Falcons team celebrating with trophy"
              fill
              sizes="520px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white backdrop-blur-xl">
              Champions Energy
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/12 bg-black/62 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <TeamLogo showText={false} size="sm" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-falcon-silver">Noida Falcons</p>
                  <p className="mt-1 text-2xl font-black uppercase text-white">Trophy Mindset</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
