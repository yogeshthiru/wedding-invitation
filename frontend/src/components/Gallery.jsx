import React from 'react'
import { motion } from 'framer-motion'
import FloatingPetals from './FloatingPetals.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-maroon-dark py-24">
      <FloatingPetals count={14} />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-script text-2xl text-gold-dark">Our Journey</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-cream sm:text-4xl">Together, With Love</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-script text-2xl leading-relaxed text-gold-light sm:text-3xl"
        >
          Together with our families, we joyfully welcome you
          <br className="hidden sm:block" /> to witness the beginning of our forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl font-body text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Two souls, two families, one beautiful story about to unfold. Your presence, blessings
          and love mean the world to us as we take this first step into a lifetime of togetherness.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-8 font-script text-xl text-gold sm:text-2xl"
        >
          With hearts full of joy, we can't wait to celebrate with you.
        </motion.p>
      </div>
    </section>
  )
}

