'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { showcasePlayers } from '@/data/showcasePlayers';
import type { ShowcasePlayer } from '@/data/showcasePlayers';
import { Button } from '@/components/ui/button';
import StadiumBackdrop from './StadiumBackdrop';

type Slot = 'previous' | 'active' | 'next';

const slotStyles: Record<Slot, string> = {
  previous: 'left-[8%] z-10 hidden scale-[.72] opacity-45 blur-[1px] md:block xl:left-[13%]',
  active: 'left-1/2 z-30 scale-100 opacity-100',
  next: 'right-[8%] z-10 hidden scale-[.72] opacity-45 blur-[1px] md:block xl:right-[13%]',
};

function getWrappedIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function ShowcasePlayerFigure({ player, slot }: { player: ShowcasePlayer; slot: Slot }) {
  const isActive = slot === 'active';
  const transformClass = slot === 'active' ? '-translate-x-1/2' : slot === 'previous' ? 'translate-x-0' : 'translate-x-0';

  return (
    <div
      data-showcase-player
      data-slot={slot}
      className={`absolute bottom-8 flex w-[58vw] max-w-[430px] origin-bottom flex-col items-center transition-[filter] duration-500 sm:w-[390px] lg:bottom-10 ${slotStyles[slot]} ${transformClass}`}
    >
      <div className={`relative w-full ${isActive ? 'h-[520px] sm:h-[610px]' : 'h-[440px]'}`}>
        {isActive && (
          <div className="absolute left-1/2 top-[8%] h-80 w-80 -translate-x-1/2 rounded-full bg-falcon-blue/35 blur-3xl" />
        )}
        <Image
          src={player.image}
          alt={`${player.name} full body cricketer placeholder`}
          fill
          priority={isActive}
          sizes={isActive ? '(max-width: 768px) 80vw, 430px' : '320px'}
          className="object-contain object-bottom drop-shadow-[0_34px_58px_rgba(0,0,0,.72)]"
        />
      </div>
      <div className={`${isActive ? 'h-7 w-56 opacity-80' : 'h-5 w-40 opacity-35'} -mt-5 rounded-full bg-black blur-xl`} />
    </div>
  );
}

export default function SquadShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const total = showcasePlayers.length;

  const activePlayer = showcasePlayers[activeIndex];
  const visiblePlayers = useMemo(() => {
    return {
      previous: showcasePlayers[getWrappedIndex(activeIndex - 1, total)],
      active: showcasePlayers[activeIndex],
      next: showcasePlayers[getWrappedIndex(activeIndex + 1, total)],
    };
  }, [activeIndex, total]);

  const goTo = useCallback((nextIndex: number) => setActiveIndex(getWrappedIndex(nextIndex, total)), [total]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrevious = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useLayoutEffect(() => {
    if (!stageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-showcase-player]',
        { y: 28, opacity: 0, scale: 0.88 },
        { y: 0, opacity: (index, target: HTMLElement) => (target.dataset.slot === 'active' ? 1 : 0.45), scale: 1, duration: 0.72, stagger: 0.06, ease: 'power3.out' },
      );
      gsap.fromTo(infoRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' });
    }, stageRef);

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrevious();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrevious]);

  const handlePointerUp = (clientX: number) => {
    if (touchStart === null) return;
    const diff = touchStart - clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) goNext();
      else goPrevious();
    }
    setTouchStart(null);
  };

  return (
    <section id="squad" className="relative min-h-screen overflow-hidden py-24 text-white md:py-28">
      <StadiumBackdrop />
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow">Noida Falcons • Rise Above The Rest</span>
          <h2 className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            The Squad
          </h2>
          <p className="mt-5 text-xl font-semibold uppercase tracking-[0.28em] text-falcon-silver">Meet The Falcons</p>
        </motion.div>

        <div
          ref={stageRef}
          className="relative mx-auto mt-10 h-[660px] max-w-7xl outline-none sm:h-[740px] lg:h-[760px]"
          tabIndex={0}
          aria-label="Noida Falcons player showcase carousel. Use left and right arrow keys to navigate."
          onPointerDown={(event) => setTouchStart(event.clientX)}
          onPointerUp={(event) => handlePointerUp(event.clientX)}
          onPointerCancel={() => setTouchStart(null)}
        >
          <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.045] shadow-glass backdrop-blur-xl sm:top-28 sm:h-[520px] sm:w-[520px]" />
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-falcon-blue/30 blur-3xl sm:h-96 sm:w-96" />

          <ShowcasePlayerFigure player={visiblePlayers.previous} slot="previous" />
          <ShowcasePlayerFigure player={visiblePlayers.active} slot="active" />
          <ShowcasePlayerFigure player={visiblePlayers.next} slot="next" />

          <div ref={infoRef} className="absolute bottom-0 left-1/2 z-40 w-full max-w-2xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-black/62 p-5 text-center shadow-glass backdrop-blur-2xl sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-falcon-blue">Noida Falcons</p>
            <h3 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">{activePlayer.name}</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-falcon-blue/40 bg-falcon-blue/20 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-white">#{String(activePlayer.number).padStart(2, '0')}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.08] px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-falcon-silver">{activePlayer.role}</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-8 flex max-w-xl items-center justify-center gap-4">
          <Button type="button" variant="outline" onClick={goPrevious} aria-label="Previous player">Previous</Button>
          <div className="flex items-center gap-2" aria-label="Carousel pagination">
            {showcasePlayers.map((player, index) => (
              <button
                key={player.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${player.name}`}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-9 bg-falcon-blue shadow-blue-glow' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
          <Button type="button" variant="default" onClick={goNext} aria-label="Next player">Next</Button>
        </div>
      </div>
    </section>
  );
}
