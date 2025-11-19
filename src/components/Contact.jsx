import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Netwerkfout')
      setStatus('Bedankt! We nemen snel contact met u op.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Er ging iets mis. Probeer het later opnieuw.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0F2220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Offerte aanvragen</h2>
          <p className="mt-4 text-white/80">Vertel ons over uw evenement. We reageren doorgaans binnen één werkdag.</p>
          <div className="mt-6 text-white/80 text-sm">
            <p>Berkel en Rodenrijs</p>
            <p>info@vanderlindecatering.nl</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Naam</label>
              <input name="name" required className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Uw naam"/>
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">E-mail</label>
              <input type="email" name="email" required className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="naam@bedrijf.nl"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/80 mb-1">Type evenement</label>
              <input name="eventType" className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Zakelijk, bruiloft, private dining..."/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/80 mb-1">Uw bericht</label>
              <textarea name="message" rows="4" className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Vertel iets meer over uw wensen"></textarea>
            </div>
          </div>
          <button type="submit" className="mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors">Verzenden</button>
          {status && <p className="mt-4 text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
