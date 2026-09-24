import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { birthdayData } from '../../data/birthdayData';

export default function Hero() {
  const { hero, photo, boyName } = birthdayData;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative mb-10 h-64 w-52 shrink-0 sm:h-80 sm:w-64"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-crimson/40 via-rose/20 to-transparent blur-xl" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-rose/25 shadow-card">
          <motion.img
            src={photo}
            alt={boyName}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-balance text-center font-display text-4xl font-medium text-blush sm:text-6xl"
      >
        {hero.title}, {boyName} <span className="text-rose">❤️</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-5 text-center text-base text-dust sm:text-lg"
      >
        {hero.subtitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="mt-3 max-w-sm text-balance text-center font-display text-lg italic text-rose/90 sm:text-xl"
      >
        {hero.smallLine}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.8 }, y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' } }}
        className="absolute bottom-8"
      >
        <ChevronDown className="text-dust/70" size={26} />
      </motion.div>
    </section>
  );
}
