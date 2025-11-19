function Plans() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        '1 parking maximum',
        '10 spaces per parking',
        'Entry/exit management',
        'Email support',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '€29/mo',
      features: [
        '5 parkings maximum',
        '50 spaces per parking',
        'Advanced reporting',
        'Priority support',
        'API access',
      ],
      cta: 'Start Pro Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '€99/mo',
      features: [
        '999 parkings (unlimited)',
        '999 spaces per parking (unlimited)',
        'All Pro features',
        'Multi-organization support',
        '24/7 dedicated support',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ]

  return (
    <section id="plans" className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Plans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/5'} p-6 text-white/80`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                <span className="text-white/90 font-medium">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-block px-4 py-2 rounded-lg font-medium ${p.highlight ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
