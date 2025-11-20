import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Search } from 'lucide-react'

function Hero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow">Find your first remote role</h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80">Curated, entry‑level opportunities from thoughtful teams. No noise, just quality roles you can grow into.</p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] focus-within:border-white/40 transition-all">
              <div className="flex items-center gap-3 p-3">
                <div className="p-2 rounded-xl bg-white/20 text-white">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search roles, companies, or keywords..."
                  className="w-full bg-transparent placeholder-white/60 text-white outline-none py-2"
                />
                <button type="submit" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium hover:scale-[1.02] active:scale-[0.99] transition">
                  Search
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-white/70 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Remote</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Design</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Frontend</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Internship</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
