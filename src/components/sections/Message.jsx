import { motion } from 'framer-motion';
import { birthdayData } from '../../data/birthdayData';

export default function Message() {
  const { message } = birthdayData;
  const paragraphs = message.body.split('\n\n').filter(Boolean);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center font-display text-3xl font-medium text-blush sm:text-4xl"
        >
          {message.heading} <span className="text-rose">💌</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glass rounded-3xl px-6 py-10 shadow-card sm:px-12 sm:py-14"
        >
          <div className="space-y-5 font-display text-lg leading-relaxed text-blush/95 sm:text-xl">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === paragraphs.length - 1 ? 'font-medium text-rose' : ''}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
