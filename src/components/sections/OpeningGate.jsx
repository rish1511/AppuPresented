import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { birthdayData } from '../../data/birthdayData';

const LINE_DURATION = 2200;

export default function OpeningGate({ onEnter }) {
  const { lineOne, lineTwo, lineThree, cta } = birthdayData.opening;
  const lines = [lineOne, lineTwo, lineThree];
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= lines.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), LINE_DURATION);
    return () => clearTimeout(t);
  }, [step, lines.length]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <div className="relative flex h-24 w-full max-w-md items-center justify-center text-center sm:h-28">
        <AnimatePresence mode="wait">
          {lines.map(
            (line, i) =>
              step === i && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute font-display text-2xl italic text-blush sm:text-3xl"
                >
                  {line}
                </motion.p>
              )
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= lines.length && (
          <motion.button
            type="button"
            onClick={onEnter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-10 flex items-center gap-2 rounded-full border border-crimson/50 bg-crimson/10 px-7 py-3 text-sm tracking-wide text-blush shadow-glow transition-colors hover:bg-crimson/20 sm:text-base"
          >
            {cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
