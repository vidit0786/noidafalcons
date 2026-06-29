import SectionHeader from './SectionHeader';

const sponsors = [
  'AeroKit',
  'Noida Metro',
  'BluePeak',
  'StadiumX',
  'SilverPay',
  'FalconFuel',
  'UrbanEdge',
  'CricketPro',
];

function SponsorLogo({ name }: { name: string }) {
  return (
    <div className="mx-3 flex h-24 min-w-56 items-center justify-center rounded-[1.7rem] border border-white/10 bg-white/[0.055] px-8 shadow-glass backdrop-blur-xl grayscale transition duration-300 hover:-translate-y-1 hover:border-falcon-orange/45 hover:bg-white/[0.09] hover:grayscale-0">
      <div className="text-center">
        <p className="bg-gradient-to-r from-white via-falcon-silver to-falcon-orange bg-clip-text text-2xl font-black uppercase tracking-tight text-transparent">
          {name}
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-white/36">Partner</p>
      </div>
    </div>
  );
}

export default function Sponsors() {
  const repeatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Official Partners"
          title="Powering The Falcons"
          description="Premium brands aligning with the ambition, reach, and winning spirit of Noida Falcons."
        />
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070707] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070707] to-transparent" />
        <div className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused]">
          {repeatedSponsors.map((name, index) => (
            <SponsorLogo key={`${name}-${index}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
