import { useEffect, useState } from 'react'

function Companies() {
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${backend}/api/companies?spotlight=true`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [])

  return (
    <section id="companies" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Company spotlights</h2>
            <p className="text-slate-600 dark:text-white/70 mt-1">Thoughtful teams hiring entry-level talent</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 p-6">
              <div className="h-10 w-10 rounded-xl" style={{ backgroundColor: c.accent_color || '#e5e7eb' }} />
              <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{c.name}</div>
              <div className="text-slate-700/70 dark:text-white/70">{c.tagline}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies
