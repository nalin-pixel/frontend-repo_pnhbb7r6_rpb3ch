import { Bot, MousePointerClick, LineChart, Megaphone, Settings } from 'lucide-react'

const services = [
  {
    icon: LineChart,
    title: 'Performance Marketing',
    desc: 'ROI-driven paid search, social, and remarketing campaigns optimized weekly for efficiency and scale.'
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Websites',
    desc: 'High-speed, mobile-first websites designed to convert visitors into leads and customers.'
  },
  {
    icon: Megaphone,
    title: 'Content & SEO',
    desc: 'Long-term organic growth with research-backed content, on-page SEO, and link strategy.'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Custom AI agents, lead triage, reporting, and workflow automation that save hours every week.'
  },
  {
    icon: Settings,
    title: 'Analytics & Tracking',
    desc: 'Clean, reliable data: GA4, pixels, server-side tracking, and dashboards you can trust.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">Full-funnel execution across paid, organic, and automation — all connected by data.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
