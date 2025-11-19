import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full backdrop-blur">
            Modern SaaS • Parking Management
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Parking Premier
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            Manage parkings, reservations, and subscriptions in one multi-tenant platform. Organization-first access control with Stripe-powered billing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#plans" className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
              View Plans
            </a>
            <a href="#features" className="px-5 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition">
              Explore Features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/70 text-sm">
            <div>Org multi-tenancy</div>
            <div>Stripe subscriptions</div>
            <div>Drizzle + Postgres</div>
          </div>
        </div>
        <div className="relative hidden lg:block" />
      </div>
    </section>
  )
}

export default Hero
