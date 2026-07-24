import React from 'react'
import { eventInfo } from '../data/eventData.js'
import FloatingPetals from './FloatingPetals.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon-dark py-10 text-center text-cream/70">
      <FloatingPetals count={8} />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <p className="font-script text-2xl text-gold-light">{eventInfo.name}</p>
        <p className="mt-2 text-sm">{eventInfo.venueAddress}</p>
        <div className="section-divider mx-auto my-6 max-w-xs" />
        <p className="text-xs">
          © {new Date().getFullYear()} {eventInfo.name}. Crafted with tradition &amp; technology.
        </p>
      </div>
    </footer>
  )
}
