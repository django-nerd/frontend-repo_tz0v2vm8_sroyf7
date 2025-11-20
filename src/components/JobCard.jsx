import { ArrowUpRight } from 'lucide-react'

function salaryText(min, max, currency) {
  if (!min && !max) return '—'
  const fmt = (v) => new Intl.NumberFormat(undefined, { style: 'currency', currency: currency || 'USD', maximumFractionDigits: 0 }).format(v)
  if (min && max) return `${fmt(min)} - ${fmt(max)}`
  return fmt(min || max)
}

function JobCard({ job }) {
  return (
    <div className="group rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-slate-900/60 dark:text-white/70">{job.company} • {job.location}</div>
          <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white tracking-tight">{job.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-900/5 dark:bg-white/10 text-slate-900/70 dark:text-white/70 border border-black/5 dark:border-white/10">{job.type}</span>
            {job.remote && <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Remote</span>}
            {job.featured && <span className="px-2.5 py-1 rounded-full text-xs bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">Featured</span>}
          </div>
        </div>
        <a href={job.apply_url || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-900 dark:text-white hover:gap-2 transition-all">
          Apply <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-4 text-slate-900/70 dark:text-white/70 line-clamp-2">{job.description}</div>
      <div className="mt-4 text-sm text-slate-900/60 dark:text-white/60">
        Compensation: {salaryText(job.salary_min, job.salary_max, job.currency)}
      </div>
    </div>
  )
}

export default JobCard
