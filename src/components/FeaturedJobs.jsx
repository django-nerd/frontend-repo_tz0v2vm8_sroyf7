import { useEffect, useMemo, useState } from 'react'
import JobCard from './JobCard'

// Using mock data only for now
const mockJobs = [
  {
    title: 'Junior Frontend Engineer',
    company: 'Nova Labs',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    remote: true,
    featured: true,
    category: 'engineering',
    description:
      'Work with a small team to build delightful web experiences. You\'ll ship accessible UI, optimize performance, and learn modern tooling.',
    salary_min: 65000,
    salary_max: 90000,
    currency: 'USD',
    apply_url: 'https://example.com/apply/frontend-intern'
  }
]

function FeaturedJobs({ query = '', category }) {
  const [filters, setFilters] = useState({ category: category || 'all', remote: true })

  useEffect(() => {
    // keep internal filter in sync when parent category changes
    if (category && category !== filters.category) {
      setFilters((f) => ({ ...f, category }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const filtered = useMemo(() => {
    let items = [...mockJobs]

    if (filters.category && filters.category !== 'all') {
      items = items.filter((j) => j.category === filters.category)
    }
    if (filters.remote) {
      items = items.filter((j) => j.remote)
    }
    if (query) {
      const q = query.toLowerCase()
      items = items.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q)
      )
    }
    return items
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
          {filtered.length ? (
            filtered.map((job, i) => <JobCard key={i} job={job} />)
          ) : (
            <div className="col-span-full text-slate-600 dark:text-white/70">No jobs found. Try adjusting your filters.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
