import { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Heart, Gift } from 'lucide-react';
import { birthdayData } from '../../data/birthdayData';
import { fillNames } from '../../utils';

function Burst({ show }) {
  const prefersReducedMotion = useReducedMotion();
  const bits = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        angle: (i / 14) * Math.PI * 2,
        distance: 70 + Math.random() * 60,
        size: 8 + Math.random() * 8,
        delay: Math.random() * 0.15,
      })),
    []
  );

  if (prefersReducedMotion || !show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: 0,
            x: Math.cos(b.angle) * b.distance,
            y: Math.sin(b.angle) * b.distance,
            scale: 1,
          }}
          transition={{ duration: 1.1, delay: b.delay, ease: 'easeOut' }}
          className="absolute text-rose"
        >
          <Heart size={b.size} fill="currentColor" strokeWidth={0} />
        </motion.span>
      ))}
    </div>
  );
}

export default function Surprise() {
  const { surprise, boyName, girlName } = birthdayData;
  const [isOpen, setIsOpen] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 1300);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="relative w-full max-w-md">
        <Burst show={showBurst} />

        <motion.div
          layout
          transition={{ layout: { duration: 0.6, ease: 'easeInOut' } }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-12 text-center shadow-card"
        >
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="mb-6 font-display text-xl italic text-blush sm:text-2xl">{surprise.intro}</p>
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full border border-crimson/50 bg-crimson/10 px-6 py-3 text-sm text-blush shadow-glow transition-colors hover:bg-crimson/20"
                >
                  <Gift size={16} />
                  {surprise.buttonLabel}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-balance font-display text-xl leading-relaxed text-blush sm:text-2xl">
                  {fillNames(surprise.revealMessage)}
                </p>
                <p className="mt-5 text-balance font-display text-xl font-medium text-rose sm:text-2xl">
                  {fillNames(surprise.revealSubMessage)}
                </p>
                <div className="mt-8 text-sm text-dust">
                  <p>{surprise.signaturePrefix}</p>
                  <p className="mt-1 font-display text-lg italic text-blush">{girlName}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
