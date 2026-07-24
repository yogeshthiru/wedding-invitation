import React, { useEffect, useRef, useState } from 'react'

// Custom animated cursor: a trishul (🔱) that tracks the pointer in true
// real time (no lag/lerp), scaling and glowing brighter over interactive elements.
export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch) return

    let isPointer = false

    const applyTransform = (x, y) => {
      if (!cursorRef.current) return
      const scale = isPointer ? 1.35 : 1
      const rotate = isPointer ? -18 : 0
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -55%) rotate(${rotate}deg) scale(${scale})`
      cursorRef.current.style.filter = isPointer
        ? 'drop-shadow(0 0 12px rgba(126,203,255,0.95)) drop-shadow(0 0 6px rgba(167,139,250,0.85))'
        : 'drop-shadow(0 0 6px rgba(126,203,255,0.6))'
    }

    const move = (e) => {
      setHidden(false)
      isPointer = !!e.target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
      applyTransform(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden select-none text-2xl leading-none transition-opacity duration-200 md:block ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      🔱
    </div>
  )
}
