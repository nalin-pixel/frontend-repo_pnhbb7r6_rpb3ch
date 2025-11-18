export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-white">Get a free growth plan</h3>
            <p className="mt-3 text-slate-300">Tell us about your goals. We’ll audit your funnel and share a step-by-step plan to increase leads and revenue in the next 90 days.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Channel mix and budget recommendations</li>
              <li>Website and conversion quick wins</li>
              <li>AI automation ideas tailored to your workflow</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="text" placeholder="Company" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea placeholder="What are you trying to achieve?" rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button type="submit" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition w-full">Request Strategy Call</button>
          </form>
        </div>
      </div>
    </section>
  )
}
