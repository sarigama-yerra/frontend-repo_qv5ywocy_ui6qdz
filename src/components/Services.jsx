import { motion } from 'framer-motion'
import { Briefcase, Users, Utensils, Wine } from 'lucide-react'

const services = [
  { icon: Briefcase, title: 'Zakelijke catering', desc: 'Van vergaderlunch tot bedrijfsfestival: professioneel, flexibel en tot in de puntjes verzorgd.' },
  { icon: Users, title: 'Particuliere evenementen', desc: 'Verjaardagen, bruiloften en jubilea met smaakvolle culinaire invulling en styling.' },
  { icon: Utensils, title: 'Foodconcepten & maatwerk', desc: 'Unieke concepten en live-cooking stations afgestemd op uw doelgroep en locatie.' },
  { icon: Wine, title: 'Private dining', desc: 'Chef aan huis, exclusieve wijnen en hoogstaande service voor intieme gezelschappen.' },
]

export default function Services() {
  return (
    <section id="diensten" className="relative bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-center">
          Catering & evenementen
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              <s.icon className="w-8 h-8 text-emerald-700"/>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
