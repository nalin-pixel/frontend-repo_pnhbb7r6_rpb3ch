import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]"></div>
            <span className="font-semibold tracking-tight text-white">Beanstalk Growth Marketing</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#results">Results</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#about">About</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-4 py-2 border border-white/15 hover:bg-white/15 transition-colors">
              <Sparkles size={18} />
              Free Strategy Call
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#results">Results</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#about">About</NavLink>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-4 py-2 border border-white/15 w-max">
                <Sparkles size={18} /> Free Strategy Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
