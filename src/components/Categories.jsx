import { useEffect, useState } from 'react'

function Categories({ onSelect }) {
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${backend}/api/categories`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [])

  return (
    <section id="categories" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Explore by category</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelect?.(cat.slug)}
              className="group rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 p-4 text-left hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition"
            >
              <div className="text-2xl">{cat.emoji || '•'}</div>
              <div className="mt-2 font-medium text-slate-900 dark:text-white">{cat.title}</div>
              <div className="text-xs text-slate-700/70 dark:text-white/60">Entry roles</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
