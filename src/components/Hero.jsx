import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh] py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/50 px-3 py-1 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400 animate-pulse"></span>
                Calgary • Digital Marketing + AI
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Beanstalk Growth Marketing
              </h1>
              <p className="mt-4 text-lg text-slate-300 max-w-xl">
                We help Calgary businesses grow with performance marketing, conversion-focused websites, and applied AI. Partner with a team that blends creativity, data, and automation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition">
                  Get a Free Growth Plan
                </a>
                <a href="#services" className="rounded-xl bg-white/10 border border-white/15 text-white px-5 py-3 font-medium hover:bg-white/15 transition">
                  Explore Services
                </a>
              </div>
              <div className="mt-6 text-slate-300/80 text-sm">
                Trusted by founders, clinics, trades, and local brands across Alberta.
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-slate-900/30 backdrop-blur-xl shadow-[0_0_80px_rgba(124,58,237,0.25)]"></div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950"></div>
      </div>
    </section>
  )
}
