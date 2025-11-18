export default function Results() {
  const items = [
    { stat: '4.6x', label: 'Average ROAS on paid social' },
    { stat: '210%', label: 'Increase in qualified leads' },
    { stat: '38%', label: 'Lower cost per acquisition' },
    { stat: '72 hrs', label: 'Average time saved with AI ops' },
  ]

  return (
    <section id="results" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((i) => (
              <div key={i.label} className="text-center">
                <div className="text-4xl font-bold text-white">{i.stat}</div>
                <div className="mt-2 text-slate-300 text-sm">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
