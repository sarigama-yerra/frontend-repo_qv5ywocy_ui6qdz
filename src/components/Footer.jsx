export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/van-der-linde-logo.png" alt="Van der Linde" className="h-8 w-auto object-contain" onError={(e)=>{e.currentTarget.src='/logo-placeholder.svg'}}/>
          <span className="text-sm text-slate-600">© {new Date().getFullYear()} Van der Linde Catering & Evenementen</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#over-ons" className="hover:text-emerald-700">Over ons</a>
          <a href="#diensten" className="hover:text-emerald-700">Diensten</a>
          <a href="#portfolio" className="hover:text-emerald-700">Portfolio</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
