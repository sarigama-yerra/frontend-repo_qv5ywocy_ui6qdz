import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="over-ons" className="relative bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_0%_0%,#F5F1EA_0%,transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Over Van der Linde</h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Vanuit Berkel en Rodenrijs verzorgen wij hoogwaardige catering en eventproducties. Met jaren ervaring, een passie voor smaak en oog voor detail creëren we belevingen die blijven hangen. Van zakelijke bijeenkomsten tot private dining en bruiloften: onze aanpak is persoonlijk, flexibel en altijd maatwerk.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We werken met seizoensgebonden producten, sterke partners en een gedreven team. Zo garanderen we premium kwaliteit, uitstekende service en gastvrijheid die u en uw gasten voelen.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <img src="/about-chef.jpg" alt="Team aan het werk" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" onError={(e)=>{e.currentTarget.src='/about-fallback.jpg'}}/>
          <img src="/van-der-linde-logo.png" alt="Logo" className="absolute -bottom-6 -right-6 w-28 h-28 object-contain opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}}/>
        </motion.div>
      </div>
    </section>
  )
}
