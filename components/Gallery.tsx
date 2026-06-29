'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { gallery } from '@/lib/team-data';
import SectionHeader from './SectionHeader';

export default function Gallery() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-white/[0.018]">
      <div className="container-page relative">
        <SectionHeader eyebrow="Gallery" title="Inside The Falcon Nest" description="A visual gallery for team photos, kit, CricHeroes QR, and future matchday moments." />
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.button key={item.src} type="button" onClick={() => setActive(item)} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-glass" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
              <p className="absolute bottom-5 left-5 text-left text-xl font-black uppercase text-white">{item.title}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-5 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="relative h-[82vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-black" initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} onClick={(event) => event.stopPropagation()}>
              <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
              <button type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-black">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
