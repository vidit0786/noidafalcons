'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TeamLogo from '@/components/TeamLogo';

export default function StadiumBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const lightsY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(10,77,155,.28),transparent_36%),linear-gradient(180deg,#050505_0%,#0a0a0a_48%,#040404_100%)]" />
      <motion.div style={{ y }} className="absolute inset-x-[-8%] bottom-[8%] h-[52%] rounded-[100%_100%_0_0] border-t border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,.14),rgba(10,77,155,.1)_38%,transparent_72%)]" />

      <motion.svg style={{ y }} viewBox="0 0 1400 620" className="absolute bottom-0 left-1/2 h-[58%] min-w-[1200px] -translate-x-1/2 opacity-80">
        <defs>
          <linearGradient id="standStroke" x1="0" x2="1">
            <stop stopColor="#C0C0C0" stopOpacity="0.04" />
            <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#C0C0C0" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path d="M95 360C285 185 1115 185 1305 360" fill="none" stroke="url(#standStroke)" strokeWidth="28" />
        <path d="M140 400C330 255 1070 255 1260 400" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="3" />
        <path d="M205 430C370 325 1030 325 1195 430" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="3" />
        {Array.from({ length: 54 }).map((_, index) => {
          const x = 125 + index * 22;
          const yPos = 382 + Math.sin(index * 0.8) * 22;
          return <circle key={index} cx={x} cy={yPos} r={index % 5 === 0 ? 4 : 2.6} fill={index % 4 === 0 ? '#0A4D9B' : '#C0C0C0'} opacity="0.45" />;
        })}
        {Array.from({ length: 20 }).map((_, index) => (
          <path key={index} d={`M${220 + index * 50} 350L${185 + index * 55} 485`} stroke="rgba(255,255,255,.08)" strokeWidth="2" />
        ))}
        <ellipse cx="700" cy="565" rx="430" ry="72" fill="rgba(18,110,60,.24)" />
        <ellipse cx="700" cy="565" rx="245" ry="38" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.1)" />
      </motion.svg>

      <motion.div style={{ y: lightsY }} className="absolute left-[6%] top-14 h-96 w-1 rotate-12 bg-gradient-to-b from-white/50 via-falcon-blue/20 to-transparent blur-[1px]" />
      <motion.div style={{ y: lightsY }} className="absolute right-[6%] top-14 h-96 w-1 -rotate-12 bg-gradient-to-b from-white/50 via-falcon-blue/20 to-transparent blur-[1px]" />
      <div className="absolute left-[2%] top-10 h-20 w-52 rotate-12 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute right-[2%] top-10 h-20 w-52 -rotate-12 rounded-full bg-white/35 blur-3xl" />

      <div className="absolute left-[12%] top-[34%] hidden opacity-20 blur-[.2px] md:block"><TeamLogo showText={false} size="lg" /></div>
      <div className="absolute right-[12%] top-[34%] hidden opacity-20 blur-[.2px] md:block"><TeamLogo showText={false} size="lg" /></div>
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </div>
  );
}
