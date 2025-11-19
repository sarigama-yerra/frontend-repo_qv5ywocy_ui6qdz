import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'over-ons', label: 'Over ons' },
  { id: 'diensten', label: 'Diensten' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'waarom', label: 'Waarom wij' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => goTo('home')}>
          <img src="/van-der-linde-logo.png" alt="Van der Linde Catering & Evenementen" className="h-9 w-auto object-contain" onError={(e)=>{e.currentTarget.src='/logo-placeholder.svg'}}/>
          <span className="font-semibold tracking-tight text-slate-900">Van der Linde</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)} className="text-slate-700 hover:text-emerald-700 transition-colors text-sm font-medium">
              {item.label}
            </button>
          ))}
          <button onClick={() => goTo('contact')} className="px-4 py-2 rounded-full bg-emerald-700 text-white text-sm font-medium shadow-sm hover:bg-emerald-800 transition-colors">
            Offerte aanvragen
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-700">
                {item.label}
              </button>
            ))}
            <button onClick={() => goTo('contact')} className="w-full mt-2 px-4 py-2 rounded-full bg-emerald-700 text-white text-sm font-medium shadow-sm">
              Offerte aanvragen
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
