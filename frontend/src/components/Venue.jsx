import React from 'react'
import { motion } from 'framer-motion'
import { eventInfo } from '../data/eventData.js'
import FloatingPetals from './FloatingPetals.jsx'

export default function Venue() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(eventInfo.mapsQuery)}&output=embed`

  return (
    <section id="venue" className="relative overflow-hidden bg-gradient-to-b from-maroon/50 to-maroon-dark py-24">
      <FloatingPetals count={14} />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-script text-2xl text-gold-dark">Find Us At</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-cream sm:text-4xl">{eventInfo.venueName}</h2>
          <p className="mt-4 max-w-md text-cream/80">{eventInfo.venueAddress}</p>

          <ul className="mt-6 space-y-5 text-sm text-cream/80">
            <li>
              <p className="mb-2 font-display text-base font-semibold text-gold">Reception</p>
              <div className="flex items-center gap-3">
                <span className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-gold-dark">📅</span>
                29 August 2026
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-gold-dark">⏰</span>
                7:00 PM onwards
              </div>
            </li>
            <li>
              <p className="mb-2 font-display text-base font-semibold text-gold">Marriage</p>
              <div className="flex items-center gap-3">
                <span className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-gold-dark">📅</span>
                30 August 2026
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-gold-dark">⏰</span>
                9:00 AM onwards
              </div>
            </li>
          </ul>

          <a
            href={`https://maps.app.goo.gl/6trmQ8QzPAc4Ezpr5`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer mt-8 inline-block rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-105 hover:bg-maroon-light"
          >
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border-4 border-gold/30 shadow-2xl"
        >
          <iframe
            title="Venue location map"
            src={mapSrc}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
