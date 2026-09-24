import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningGate from './components/sections/OpeningGate';
import Hero from './components/sections/Hero';
import Message from './components/sections/Message';
import Memory from './components/sections/Memory';
import Wishes from './components/sections/Wishes';
import Surprise from './components/sections/Surprise';
import Finale from './components/sections/Finale';
import FloatingParticles from './components/FloatingParticles';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-noir">
      <AnimatePresence>
        {!hasEntered && <OpeningGate onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      {hasEntered && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <FloatingParticles />
          <Hero />
          <Message />
          <Memory />
          <Wishes />
          <Surprise />
          <Finale />
          <MusicPlayer />
        </motion.main>
      )}
    </div>
  );
}
