import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { eventInfo } from '../data/eventData.js'

function getTimeLeft() {
  const diff = new Date(eventInfo.startDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false
  }
}

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' }
]

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-maroon-dark py-16">
      <div className="section-divider absolute top-0 w-full" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-cream sm:text-4xl"
        >
          Counting Down to {eventInfo.name}
        </motion.h2>
        <p className="mt-2 text-cream/70">
          {time.done ? 'The summit has begun — see you there!' : `${eventInfo.displayDate} · ${eventInfo.displayTime}`}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.key}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card cursor-pointer rounded-2xl py-6 shadow-lg shadow-violet-dark/40"
            >
              <span className="block font-display text-4xl font-extrabold text-cream sm:text-5xl">
                {String(time[u.key]).padStart(2, '0')}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-gold-dark sm:text-sm">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
