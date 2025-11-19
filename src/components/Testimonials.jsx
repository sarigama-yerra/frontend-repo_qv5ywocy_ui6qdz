import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REVIEWS = [
  { quote: 'Van begin tot eind perfect geregeld. Onze gasten praten er nog over!', author: 'HR Event – Rotterdam' },
  { quote: 'Heerlijke gerechten, professioneel team en super service.', author: 'Bruiloft – Delft' },
  { quote: 'Snel schakelen en creatief in oplossingen. Aanrader!', author: 'Productlaunch – Den Haag' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="reviews" className="relative bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Wat klanten zeggen</h2>
        <div className="mt-10 relative min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.blockquote key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-xl text-slate-700">
              “{REVIEWS[index].quote}”
              <footer className="mt-4 text-sm text-slate-500">— {REVIEWS[index].author}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
