'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { fixtures, teamInfo } from '@/lib/team-data';
import { formatDateTime } from '@/lib/utils';
import SectionHeader from './SectionHeader';
import TeamLogo from './TeamLogo';

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(targetDate: number): TimeLeft {
  const difference = Math.max(targetDate - Date.now(), 0);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function OpponentLogo({ name }: { name: string }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/20 bg-gradient-to-br from-[#151515] via-[#303030] to-falcon-orange/80 shadow-[0_0_40px_rgba(255,106,0,.25)]">
      <span className="text-2xl font-black text-white">{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
    </div>
  );
}

export default function UpcomingMatch() {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const nextFixture = useMemo(
    () => fixtures.filter((fixture) => fixture.status === 'upcoming' && new Date(fixture.startDateTime).getTime() > now).sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime())[0],
    [now],
  );

  const timeLeft = getTimeLeft(nextFixture ? new Date(nextFixture.startDateTime).getTime() : now);
  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section id="matches" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-falcon-orange/15 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader eyebrow="Upcoming Fixture" title="Next Match Center" description="Upcoming public CricHeroes fixtures are surfaced here and automatically disappear from the UI once their scheduled date and time has passed." />

        {nextFixture ? (
          <motion.div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-glass backdrop-blur-2xl sm:p-8 lg:p-10" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,.36),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.1),transparent_28%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
              <div className="text-center"><div className="mx-auto mb-4 flex justify-center"><TeamLogo showText={false} size="lg" /></div><h3 className="text-2xl font-black uppercase text-white">Noida Falcons</h3><p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-falcon-silver">Home</p></div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black/45 text-3xl font-black text-white shadow-glow backdrop-blur-xl lg:h-28 lg:w-28">VS</div>
              <div className="text-center"><div className="mx-auto mb-4 flex justify-center"><OpponentLogo name={nextFixture.opponent} /></div><h3 className="text-2xl font-black uppercase text-white">{nextFixture.opponent}</h3><p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-falcon-silver">Opponent</p></div>
            </div>

            <div className="relative mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-black/36 p-5 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4 lg:p-6">
              <div><p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Match</p><p className="mt-2 text-2xl font-black text-white">{nextFixture.stage}</p></div>
              <div><p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Tournament</p><p className="mt-2 text-2xl font-black text-white">{nextFixture.tournament}</p></div>
              <div><p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Date & Time</p><p className="mt-2 text-2xl font-black text-white">{formatDateTime(nextFixture.startDateTime)}</p></div>
              <div><p className="text-xs font-black uppercase tracking-[0.28em] text-falcon-silver">Ground</p><p className="mt-2 text-2xl font-black text-white">{nextFixture.venue}, {nextFixture.location}</p></div>
            </div>

            <div className="relative mt-6 flex justify-center"><a href={teamInfo.cricHeroesMatchesUrl} target="_blank" rel="noreferrer" className="premium-button border border-falcon-orange bg-falcon-orange text-white shadow-glow">View Match On CricHeroes</a></div>

            <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {units.map((unit) => (
                <div key={unit.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-4 text-center backdrop-blur-xl"><motion.p key={unit.value} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-4xl font-black text-white md:text-5xl">{String(unit.value).padStart(2, '0')}</motion.p><p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">{unit.label}</p></div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div className="mx-auto max-w-3xl rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-glass backdrop-blur-xl" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black uppercase text-white">No upcoming match listed</h3><p className="mt-3 leading-7 text-white/66">All scheduled fixtures have passed or no public CricHeroes upcoming fixture has been added yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
