import React from 'react'
import { motion } from 'framer-motion'
import { agenda } from '../data/eventData.js'
import FloatingPetals from './FloatingPetals.jsx'

const icons = {
  lamp: (
    <path d="M12 2v3m-4 4h8l-1 4H9l-1-4zM7 13h10l-1 3a4 4 0 01-8 0l-1-3zM10 20h4" />
  ),
  hands: <path d="M7 11V6a2 2 0 114 0v5m0-3a2 2 0 114 0v4m0-2a2 2 0 114 0v3a6 6 0 01-6 6H9a5 5 0 01-4-2l-2-3a1.5 1.5 0 012.4-1.8L7 15" />,
  music: <path d="M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z" />,
  award: <path d="M12 15a6 6 0 100-12 6 6 0 000 12zm-3.5 1.5L7 22l5-3 5 3-1.5-5.5" />
}

export default function Agenda() {
  return (
    <section id="agenda" className="relative overflow-hidden bg-maroon-dark py-24">
      {/* Hands.jpg backdrop, blended into the blue-violet night theme */}
      <div className="absolute inset-0">
        <img
          src="/images/hands.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon-dark/40 to-maroon-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-violet/30 via-transparent to-saffron/10 mix-blend-overlay" />
      </div>

      <FloatingPetals count={14} />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-script text-2xl text-gold-dark">The Schedule</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-cream sm:text-4xl">Event Agenda</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gold/40 md:block" />
          <div className="space-y-10">
            {agenda.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <div
                    className={`glass-card cursor-pointer rounded-2xl p-6 shadow-lg shadow-violet-dark/40 transition-transform hover:-translate-y-1 ${
                      i % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-saffron">{item.day}</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-cream">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-gold-dark">{item.time}</p>
                    <p className="mt-2 text-sm text-cream/70">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-maroon-dark text-gold shadow md:flex">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {icons[item.icon]}
                  </svg>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
