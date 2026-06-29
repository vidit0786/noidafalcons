'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { MatchServiceResult, NormalizedMatch } from '@/lib/matchService';
import SectionHeader from './SectionHeader';
import MatchModal from './match-centre/MatchModal';
import RecentMatches from './match-centre/RecentMatches';
import ScorecardModal from './match-centre/ScorecardModal';
import UpcomingMatches from './match-centre/UpcomingMatches';

const DEFAULT_SOURCE_URL = 'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS?tab=matches';

export default function MatchCentre() {
  const [data, setData] = useState<MatchServiceResult>({ upcoming: [], recent: [], sourceUrl: DEFAULT_SOURCE_URL, fetchedAt: new Date().toISOString() });
  const [loading, setLoading] = useState(true);
  const [selectedUpcoming, setSelectedUpcoming] = useState<NormalizedMatch | null>(null);
  const [selectedResult, setSelectedResult] = useState<NormalizedMatch | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMatches() {
      try {
        setLoading(true);
        const response = await fetch('/api/matches', { signal: controller.signal, cache: 'no-store' });
        if (!response.ok) throw new Error('Unable to load match centre data.');
        const payload = (await response.json()) as MatchServiceResult;
        setData(payload);
      } catch (error) {
        if (!controller.signal.aborted) {
          setData({
            upcoming: [],
            recent: [],
            sourceUrl: DEFAULT_SOURCE_URL,
            fetchedAt: new Date().toISOString(),
            parseWarning: error instanceof Error ? error.message : 'Unable to load match centre data.',
          });
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadMatches();
    return () => controller.abort();
  }, []);

  return (
    <section id="match-centre" className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="absolute left-[-10rem] top-10 h-96 w-96 rounded-full bg-falcon-orange/15 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-falcon-sky/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Match Centre"
          title="Fixtures & Results"
          description="A professional CricHeroes-powered match hub. Public data is fetched, normalized and displayed without breaking the layout if CricHeroes limits access."
        />

        <motion.div
          className="grid items-stretch gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <UpcomingMatches matches={data.upcoming} loading={loading} sourceUrl={data.sourceUrl} onSelect={setSelectedUpcoming} />
          <RecentMatches matches={data.recent} loading={loading} sourceUrl={data.sourceUrl} onSelect={setSelectedResult} />
        </motion.div>

        {data.parseWarning && !loading && (
          <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/10 bg-black/34 px-5 py-4 text-center text-sm leading-6 text-white/58 backdrop-blur-xl">
            {data.parseWarning} The Match Centre is ready for additional public CricHeroes URLs or API-backed data without UI changes.
          </p>
        )}
      </div>

      <MatchModal match={selectedUpcoming} onClose={() => setSelectedUpcoming(null)} />
      <ScorecardModal match={selectedResult} onClose={() => setSelectedResult(null)} />
    </section>
  );
}
