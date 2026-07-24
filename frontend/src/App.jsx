import React from 'react'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Agenda from './components/Agenda.jsx'
import Gallery from './components/Gallery.jsx'
import Venue from './components/Venue.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Agenda />
        <Gallery />
        <Venue />
      </main>
      <Footer />
    </div>
  )
}
