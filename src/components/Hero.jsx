import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] flex items-end overflow-hidden">
      <motion.img
        src="/hero-catering.jpg"
        alt="Catering en evenementen"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
        onError={(e)=>{e.currentTarget.src='/hero-fallback.jpg'}}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.h1 style={{ opacity }} className="max-w-2xl text-4xl sm:text-6xl font-semibold tracking-tight text-white">
          Catering die uw evenement onvergetelijk maakt
        </motion.h1>
        <motion.p style={{ opacity }} className="mt-6 max-w-xl text-white/80">
          Van intieme private dining tot grootschalige bedrijfsevents: wij verzorgen culinaire totaalbelevingen met aandacht voor detail.
        </motion.p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-full bg-emerald-700 text-white font-medium shadow-lg shadow-emerald-900/30 hover:bg-emerald-800 transition-colors">
            Offerte aanvragen
          </a>
          <a href="#portfolio" className="px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition-colors">
            Bekijk ons werk
          </a>
        </div>
      </div>
    </section>
  )
}
