import AboutSection from '@/components/AboutSection';
import SquadSection from '@/components/squad/SquadSection';
import SquadShowcase from '@/components/squad-showcase/SquadShowcase';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Leaderboard from '@/components/Leaderboard';
import MatchCentre from '@/components/MatchCentre';
import Navbar from '@/components/Navbar';
import Sponsors from '@/components/Sponsors';
import TeamQRSection from '@/components/TeamQRSection';
import TeamStats from '@/components/TeamStats';
import TrophyCabinet from '@/components/TrophyCabinet';
import UpcomingMatch from '@/components/UpcomingMatch';

export default function Home() {
  const sportsTeamJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Noida Falcons',
    sport: 'Cricket',
    url: 'https://noidafalcons-two.vercel.app',
    logo: 'https://noidafalcons-two.vercel.app/images/noida-falcons-official-logo.png',
    sameAs: [
      'https://www.instagram.com/noidafalcons?igsh=MXJoMHJ3ZDdkdnpsMw==',
      'https://youtube.com/@noida.falcons?si=KpwhB61IEaSwGUFx',
      'https://cricheroes.com/team-profile/275516/NOIDA-FALCONS',
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-falcon-midnight text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsTeamJsonLd) }} />
      <Navbar />
      <Hero />
      <AboutSection />
      <SquadShowcase />
      <SquadSection />
      <Leaderboard />
      <UpcomingMatch />
      <MatchCentre />
      <TeamStats />
      <TrophyCabinet />
      <Gallery />
      <LatestNews />
      <Sponsors />
      <TeamQRSection />
      <Footer />
    </main>
  );
}
