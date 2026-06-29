'use client';

import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

const stats = [
  { label: 'Team ID', value: 275516, suffix: '' },
  { label: 'Established', value: 2019, suffix: '' },
  { label: 'PCL Matches', value: 49, suffix: '' },
  { label: 'PCL Teams', value: 16, suffix: '' },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: value > 100 ? 2.2 : 1.7,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TeamStats() {
  return (
    <section className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Team Numbers"
          title="CricHeroes Team Snapshot"
          description="Official discovery numbers and tournament context for Noida Falcons, including the CricHeroes team ID and PCL-ELEVEN-11 tournament details."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 text-center shadow-glass backdrop-blur-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-falcon-orange to-transparent" />
              <p className="font-display text-5xl font-black text-white md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.22em] text-falcon-silver">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
