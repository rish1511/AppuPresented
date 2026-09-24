import { motion } from 'framer-motion';
import { birthdayData } from '../../data/birthdayData';
import { fillNames } from '../../utils';

export default function Finale() {
  const { final, photo, boyName } = birthdayData;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0">
        <img src={photo} alt="" className="h-full w-full object-cover opacity-10 blur-md" />
        <div className="absolute inset-0 bg-noir/85" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="text-balance font-display text-3xl font-medium text-blush sm:text-5xl"
        >
          {fillNames(final.heading)} <span className="text-rose">❤️</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-md text-balance font-display text-lg italic text-dust sm:text-xl"
        >
          {final.lineOne}
          <br />
          {final.lineTwo}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-balance text-lg text-blush sm:text-xl"
        >
          {final.lineThree}
          <br />
          {final.lineFour} <span className="text-rose">❤️</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 font-display text-sm italic text-dust/70"
        >
          {fillNames(final.footer)}
        </motion.p>
      </div>
    </section>
  );
}
