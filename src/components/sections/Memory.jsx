import { motion } from 'framer-motion';
import { birthdayData } from '../../data/birthdayData';

export default function Memory() {
  const { memory, photo, boyName } = birthdayData;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-balance text-center font-display text-3xl font-medium text-blush sm:text-4xl"
      >
        {memory.heading}
      </motion.h2>

      <div className="relative w-full max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-balance text-center font-display text-lg italic text-dust sm:text-xl"
        >
          {memory.textOne}
        </motion.p>

        <motion.div
          initial={{ clipPath: 'inset(0 50% 0 50%)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-rose/20 shadow-card"
        >
          <img src={photo} alt={boyName} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-balance text-center text-base text-dust sm:text-lg"
        >
          {memory.textTwo}
        </motion.p>
      </div>
    </section>
  );
}
