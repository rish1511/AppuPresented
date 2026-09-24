import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

// Music never autoplays. This is the only control for it — a small,
// unobtrusive floating button that stays reachable while scrolling.
const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.55;
  }, []);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
    }
  };

  useImperativeHandle(ref, () => ({ play }), [hasError]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await play();
      }
    } catch {
      setHasError(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={birthdayData.music} preload="auto" onError={() => setHasError(true)} />
      <motion.button
        type="button"
        onClick={toggle}
        disabled={hasError}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={hasError ? 'Add /music/birthday.mp3 to enable music' : isPlaying ? 'Pause music' : 'Play music'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hasError ? 0.35 : 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full glass shadow-card disabled:cursor-not-allowed"
      >
        {isPlaying ? (
          <Pause size={18} className="text-blush" fill="currentColor" strokeWidth={0} />
        ) : (
          <Music size={18} className="text-blush" />
        )}
        {isPlaying && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose/20" />
        )}
      </motion.button>
    </>
  );
});

export default MusicPlayer;
