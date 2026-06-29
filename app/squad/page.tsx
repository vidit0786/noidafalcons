import type { Metadata } from 'next';
import SquadSection from '@/components/squad/SquadSection';
import SquadShowcase from '@/components/squad-showcase/SquadShowcase';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Squad | Noida Falcons',
  description: 'Explore the Noida Falcons squad, player roles, jersey numbers and profile pages.',
};

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-falcon-midnight text-white">
      <Navbar />
      <div className="pt-16"><SquadShowcase /><SquadSection /></div>
      <Footer />
    </main>
  );
}
