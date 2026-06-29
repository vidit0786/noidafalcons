'use client';

import { motion } from 'framer-motion';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={isCenter ? 'mx-auto mb-12 max-w-3xl text-center md:mb-16' : 'mb-10 max-w-2xl text-left'}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">{description}</p>}
    </motion.div>
  );
}
