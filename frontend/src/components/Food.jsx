import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { foodMenu } from '../data/eventData.js'
import FloatingPetals from './FloatingPetals.jsx'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Food() {
  return (
    <section id="food" className="relative overflow-hidden bg-maroon-dark py-24">
      <FloatingPetals count={14} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="font-script text-2xl text-gold-light">Mahaprasad</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-cream sm:text-4xl">Sacred Feast</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cream/70">
            A traditional spread of prasadam and festive delicacies, blessed and shared with all who attend.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.1}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 }
          }}
          className="food-swiper pb-12"
        >
          {foodMenu.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="group cursor-pointer overflow-hidden rounded-2xl border border-gold/20 bg-maroon/40 shadow-xl transition-transform hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-cream">{item.name}</h3>
                  <p className="mt-1 text-sm text-gold-light/90">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
