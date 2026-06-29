import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import MatchCentre from '@/components/MatchCentre';
import Navbar from '@/components/Navbar';
import UpcomingMatch from '@/components/UpcomingMatch';

export const metadata: Metadata = {
  title: 'Match Centre | Noida Falcons',
  description: 'Noida Falcons fixtures, results and CricHeroes match centre.',
};

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-falcon-midnight text-white">
      <Navbar />
      <div className="pt-16"><UpcomingMatch /><MatchCentre /></div>
      <Footer />
    </main>
  );
}
