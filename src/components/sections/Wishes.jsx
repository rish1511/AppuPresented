import { motion } from 'framer-motion';
import { Sparkles, BookHeart, Trophy, Smile, Heart } from 'lucide-react';
import { birthdayData } from '../../data/birthdayData';

const ICONS = { Sparkles, BookHeart, Trophy, Smile, Heart };

export default function Wishes() {
  const { wishes, wishesFooter } = birthdayData;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-balance text-center font-display text-3xl font-medium text-blush sm:text-4xl"
      >
        Things I Wish For You
      </motion.h2>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        {wishes.map((wish, i) => {
          const Icon = ICONS[wish.icon] || Heart;
          return (
            <motion.div
              key={wish.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-6 shadow-card transition-shadow hover:shadow-glow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/15 text-rose transition-colors group-hover:bg-crimson/25">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 font-display text-xl font-medium text-blush">{wish.title}</h3>
              <p className="text-sm leading-relaxed text-dust">{wish.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 text-balance text-center font-display text-lg italic text-rose/90"
      >
        {wishesFooter}
      </motion.p>
    </section>
  );
}
