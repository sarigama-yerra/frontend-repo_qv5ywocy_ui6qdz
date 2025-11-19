import { motion } from 'framer-motion'
import { Star, Sparkles, ShieldCheck, Gauge, Handshake } from 'lucide-react'

const usps = [
  { icon: Star, title: 'Topkwaliteit', desc: 'Verse ingrediënten, seizoensgebonden en met liefde bereid.' },
  { icon: ShieldCheck, title: 'Betrouwbaar', desc: 'Strakke organisatie, heldere communicatie en planning.' },
  { icon: Gauge, title: 'Flexibel', desc: 'Van 10 tot 1000 gasten – wij schalen mee met uw wensen.' },
  { icon: Handshake, title: 'Servicegericht', desc: 'Gastvrij team dat ontzorgt van briefing tot uitvoering.' },
  { icon: Sparkles, title: 'Maatwerk', desc: 'Concepten die passen bij uw doelgroep, locatie en budget.' },
]

export default function WhyUs() {
  return (
    <section id="waarom" className="relative bg-[#0F2220] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center">
          Waarom Van der Linde
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {usps.map((u, idx) => (
            <motion.div key={u.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white">
              <u.icon className="w-8 h-8 text-emerald-400"/>
              <h3 className="mt-4 text-lg font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-white/80">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
