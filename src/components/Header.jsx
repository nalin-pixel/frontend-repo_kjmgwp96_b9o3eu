import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Parking Premier" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-tight">Parking Premier</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#plans" className="hover:text-white transition">Pricing</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="/test" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">Backend Test</a>
        </nav>
        <button onClick={() => setOpen(v=>!v)} className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 space-y-2 text-white/80">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-white/10">Features</a>
            <a href="#plans" className="block px-2 py-2 rounded hover:bg-white/10">Pricing</a>
            <a href="#security" className="block px-2 py-2 rounded hover:bg-white/10">Security</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-white/10">Contact</a>
            <a href="/test" className="block px-2 py-2 rounded bg-white/10 hover:bg-white/20">Backend Test</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
