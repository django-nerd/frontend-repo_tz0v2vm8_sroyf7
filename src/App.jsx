import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedJobs from './components/FeaturedJobs'
import Categories from './components/Categories'
import Companies from './components/Companies'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSearch = (q) => setQuery(q)
  const handleCategory = (slug) => {
    setSelectedCategory(slug)
    setQuery('')
    // Scroll to featured
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.10),rgba(14,165,233,0.05)_60%,transparent_100%)]" />
      <Navbar />
      <Hero onSearch={handleSearch} />
      <main className="relative">
        <FeaturedJobs query={query} category={selectedCategory} />
        <Categories onSelect={handleCategory} />
        <Companies />
      </main>
      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/70">Made with care for early-career talent.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
