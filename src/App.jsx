import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Plans />

      <footer id="contact" className="relative z-10 py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} Parking Premier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="/test" className="hover:text-white">Backend Test</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
