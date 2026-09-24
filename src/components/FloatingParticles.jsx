import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';

// A quiet drift of a handful of hearts. Deliberately sparse and slow —
// this is atmosphere, not decoration covering the screen.
export default function FloatingParticles({ count = 7 }) {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${8 + Math.random() * 84}%`,
        size: 10 + Math.random() * 12,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.2,
      })),
    [count]
  );

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <Heart
          key={p.id}
          className="absolute bottom-0 text-rose animate-drift"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}
