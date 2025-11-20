import { useEffect, useState } from 'react'
import JobCard from './JobCard'

function FeaturedJobs({ query }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ category: 'all', remote: true })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchJobs = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (filters.category && filters.category !== 'all') params.set('category', filters.category)
    if (filters.remote !== undefined) params.set('remote', filters.remote)
    params.set('featured', true)

    const res = await fetch(`${backend}/api/jobs?${params.toString()}`)
    const data = await res.json()
    setJobs(data.items || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filters])

  return (
    <section id="featured" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Featured roles</h2>
            <p className="text-slate-600 dark:text-white/70 mt-1">Hand-picked opportunities for early-career talent</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filters.category}
              onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
              className="rounded-xl bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 px-3 py-2 text-sm text-slate-700 dark:text-white"
            >
              <option value="all">All</option>
              <option value="design">Design</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="support">Support</option>
            </select>
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-white">
              <input type="checkbox" checked={filters.remote} onChange={(e) => setFilters((f) => ({ ...f, remote: e.target.checked }))} />
              Remote only
            </label>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 rounded-2xl bg-slate-200/60 dark:bg-white/5 animate-pulse" />
            ))
          ) : jobs.length ? (
            jobs.map((job, i) => <JobCard key={i} job={job} />)
          ) : (
            <div className="col-span-full text-slate-600 dark:text-white/70">No jobs found. Try adjusting your filters.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
