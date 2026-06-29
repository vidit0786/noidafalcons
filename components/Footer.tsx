import TeamLogo from './TeamLogo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Squad', href: '#squad' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Matches', href: '#matches' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
];

const contacts = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/noidafalcons?igsh=MXJoMHJ3ZDdkdnpsMw==',
    icon: 'instagram',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@noida.falcons?si=KpwhB61IEaSwGUFx',
    icon: 'youtube',
  },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 2A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Zm5-2.3a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 7.1Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-black/55 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,106,0,.28),transparent_28%)]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-10 md:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <TeamLogo />
            <p className="mt-5 max-w-md leading-7 text-white/62">
              Noida Falcons — Rise Above The Rest. A premium cricket franchise representing pace, pride, and the future of sport in Noida.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-falcon-silver">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-white/65 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-falcon-silver">Contact</h3>
            <div className="mt-5 flex gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:border-falcon-orange/60 hover:bg-falcon-orange hover:shadow-glow"
                >
                  <SocialIcon icon={contact.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/46 md:flex-row md:items-center">
          <p>© 2026 Noida Falcons. All rights reserved.</p>
          <p className="font-bold uppercase tracking-[0.22em] text-falcon-silver/70">Rise Above The Rest</p>
        </div>
      </div>
    </footer>
  );
}
