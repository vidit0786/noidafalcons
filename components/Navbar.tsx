'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TeamLogo from './TeamLogo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Squad', href: '#squad' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Matches', href: '#matches' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          hasScrolled
            ? 'border-white/12 bg-black/62 shadow-glass backdrop-blur-2xl'
            : 'border-white/5 bg-white/[0.025] backdrop-blur-sm'
        }`}
        aria-label="Main navigation"
      >
        <a href="#home" className="group outline-none" onClick={() => setIsOpen(false)}>
          <TeamLogo size="sm" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/72 transition duration-300 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#matches"
          className="premium-button hidden border border-falcon-orange/60 bg-falcon-orange/90 text-white shadow-glow hover:border-white/30 hover:bg-falcon-orange lg:inline-flex"
        >
          Match Center
        </a>

        <button
          type="button"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/82 shadow-glass backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1 p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/78 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
