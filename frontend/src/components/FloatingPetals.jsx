import React, { useMemo } from 'react'

// Ambient background animation: soft falling marigold-petal glyphs.
// Pure CSS-driven (no JS animation loop) so it's cheap to run.
// Rendered inside a positioned wrapper so it layers above that
// wrapper's own background but stays purely decorative (pointer-events-none).
export default function FloatingPetals({ count = 18, className = 'pointer-events-none absolute inset-0 z-10 overflow-hidden' }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 12,
        hue: i % 2 === 0 ? 'bg-gold/70' : 'bg-saffron/60'
      })),
    [count]
  )

  return (
    <div className={className} aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`absolute top-0 block rounded-full ${p.hue} animate-fall`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  )
}
