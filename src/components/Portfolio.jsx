import { motion } from 'framer-motion'

const items = [
  { src: '/portfolio-1.jpg', title: 'Bedrijfsevent – Rotterdam' },
  { src: '/portfolio-2.jpg', title: 'Bruiloft – Landgoed' },
  { src: '/portfolio-3.jpg', title: 'Private dining – Den Haag' },
  { src: '/portfolio-4.jpg', title: 'Productlaunch – Amsterdam' },
  { src: '/portfolio-5.jpg', title: 'Festivalcatering' },
  { src: '/portfolio-6.jpg', title: 'Zakelijke borrel' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-center">
          Portfolio & inspiratie
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.figure key={it.src} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
              <img src={it.src} alt={it.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e)=>{e.currentTarget.src='/portfolio-fallback.jpg'}}/>
              <figcaption className="p-4 text-sm text-slate-700">{it.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
