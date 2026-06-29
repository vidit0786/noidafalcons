import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PlayerAvatar from '@/components/ui/PlayerAvatar';
import { players, teamInfo } from '@/lib/team-data';

type PlayerPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const player = players.find((item) => item.slug === slug);
  if (!player) return { title: 'Player Not Found | Noida Falcons' };
  return {
    title: `${player.name} | Noida Falcons`,
    description: `${player.name} profile, stats, role and leaderboard details for Noida Falcons.`,
    openGraph: {
      title: `${player.name} | Noida Falcons`,
      description: `${player.name} profile for Noida Falcons.`,
      images: player.image ? [player.image] : [teamInfo.logo],
    },
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { slug } = await params;
  const player = players.find((item) => item.slug === slug);
  if (!player) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: player.name,
    memberOf: { '@type': 'SportsTeam', name: teamInfo.name },
    image: player.image,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-falcon-midnight text-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden pb-20 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,106,0,.25),transparent_30%)]" />
        <div className="container-page relative">
          <Link href="/#squad" className="text-sm font-black uppercase tracking-[0.22em] text-falcon-orange hover:text-white">← Back to Squad</Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-glass backdrop-blur-xl">
              <div className="mx-auto w-fit"><PlayerAvatar name={player.name} image={player.image} size="lg" className="h-44 w-44" /></div>
              {player.isCaptain && <p className="mx-auto mt-5 w-fit rounded-full bg-falcon-orange px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-glow">Captain</p>}
              <h1 className="mt-6 text-4xl font-black uppercase text-white md:text-5xl">{player.name}</h1>
              <p className="mt-3 text-lg font-semibold text-falcon-silver">{player.role}</p>
              <p className="mt-6 font-display text-6xl font-black text-falcon-orange">{player.jersey ? `#${player.jersey}` : '—'}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {player.batting && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-glass backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Batting</p>
                  <p className="mt-4 text-5xl font-black text-white">{player.batting.runs}</p>
                  <p className="mt-2 text-white/62">Runs • Rank {player.batting.rank}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center"><span>Inn<br /><b>{player.batting.innings}</b></span><span>Avg<br /><b>{player.batting.average}</b></span><span>SR<br /><b>{player.batting.strikeRate}</b></span></div>
                </div>
              )}
              {player.bowling && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-glass backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Bowling</p>
                  <p className="mt-4 text-5xl font-black text-white">{player.bowling.wickets}</p>
                  <p className="mt-2 text-white/62">Wickets • Rank {player.bowling.rank}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center"><span>Inn<br /><b>{player.bowling.innings}</b></span><span>Eco<br /><b>{player.bowling.economy}</b></span><span>Avg<br /><b>{player.bowling.average}</b></span></div>
                </div>
              )}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-glass backdrop-blur-xl sm:col-span-2">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-falcon-silver">Profile Note</p>
                <p className="mt-4 leading-8 text-white/70">This profile is powered by public CricHeroes data and Noida Falcons provided assets. Future live API sync can update scorecards and rankings without changing the UI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
