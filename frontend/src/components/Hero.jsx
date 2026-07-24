import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { eventInfo, heroImage } from '../data/eventData.js'

// Immersive hero section with mouse-driven parallax layers,
// an animated mandala ring and a moonlit backdrop of Shiva & Parvati's hands.
export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const namesOnly = eventInfo.name.replace(/\s+Wedding$/i, '')
  const [groomName, brideName] = namesOnly.split(/\s*&\s*/)

  const springX = useSpring(mx, { stiffness: 60, damping: 20 })
  const springY = useSpring(my, { stiffness: 60, damping: 20 })

  const layer1X = useTransform(springX, [-1, 1], [-18, 18])
  const layer1Y = useTransform(springY, [-1, 1], [-18, 18])
  const layer2X = useTransform(springX, [-1, 1], [14, -14])
  const layer2Y = useTransform(springY, [-1, 1], [14, -14])
  const layer3X = useTransform(springX, [-1, 1], [-8, 8])
  const layer3Y = useTransform(springY, [-1, 1], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    mx.set(px * 2 - 1)
    my.set(py * 2 - 1)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-light"
    >
      {/* Moonlit background image with a deep night-blue veil */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={heroImage.src}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-maroon-dark/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/20 to-maroon-dark/70" />
      </div>

      {/* Parallax mandala rings */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-gold/20 mandala-ring animate-spin-slow"
      />
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full border border-gold/10 mandala-ring"
      />
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="pointer-events-none absolute right-10 top-24 h-40 w-40 rounded-full border border-saffron/30"
      />

      {/* Floating blobs for extra motion */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-saffron/10 blur-3xl animate-blob [animation-delay:4s]" />

      {/* Content */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 font-script text-3xl text-gold-light animate-float sm:text-4xl"
        >
          You are cordially invited to
        </motion.p>

        <motion.h1
          initial={false}
          animate={{ y: 0 }}
          className="font-display font-extrabold text-gradient-gold drop-shadow-lg"
        >
          <span className="flex flex-wrap items-baseline justify-center gap-x-2 sm:flex-nowrap sm:gap-x-3">
            <motion.span
              initial={{ x: '-45vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {groomName}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.4, ease: 'easeOut' }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              &amp;
            </motion.span>
            <motion.span
              initial={{ x: '45vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {brideName}
            </motion.span>
          </span>
          <span className="mt-1 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Wedding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-xl font-medium tracking-wide text-cream/90 sm:text-2xl"
        >
          {eventInfo.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-3 max-w-xl font-body text-base text-cream/70 sm:text-lg"
        >
          {eventInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14"
        >
          <a
            href="#agenda"
            className="cursor-pointer inline-block rounded-full bg-gold px-10 py-4 font-display text-xl font-bold text-maroon-dark shadow-xl shadow-gold/30 transition-transform hover:scale-105"
          >
            View the Celebrations
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/80"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
