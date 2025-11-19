function Features() {
  const items = [
    {
      title: 'Organization-based Access',
      desc: 'Roles, permissions, and active organization context built-in.',
    },
    {
      title: 'Parking Management',
      desc: 'Create multiple parkings, define pricing, hours, and space types.',
    },
    {
      title: 'Customer Experience',
      desc: 'Reservations, monthly passes, and real-time availability.',
    },
    {
      title: 'Subscriptions',
      desc: 'Basic, Pro, and Enterprise plans with automatic limit enforcement.',
    },
  ]

  return (
    <section id="features" className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Key features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
              <h3 className="text-white font-medium mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
