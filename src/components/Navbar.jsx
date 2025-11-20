import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <a href="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/70 shadow-inner" />
              <span className="font-semibold tracking-tight text-white">EntryStart</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-white/80">
              <a href="#featured" className="hover:text-white transition-colors">Featured</a>
              <a href="#categories" className="hover:text-white transition-colors">Categories</a>
              <a href="#companies" className="hover:text-white transition-colors">Companies</a>
            </nav>
            <button className="md:hidden p-2 rounded-lg bg-white/10 text-white" onClick={() => setOpen(!open)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 text-white/90">
              <a href="#featured" className="block py-2">Featured</a>
              <a href="#categories" className="block py-2">Categories</a>
              <a href="#companies" className="block py-2">Companies</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
