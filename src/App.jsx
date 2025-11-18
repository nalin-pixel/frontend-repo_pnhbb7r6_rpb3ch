import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <CTA />
        <footer className="py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Beanstalk Growth Marketing • Calgary, AB
        </footer>
      </main>
    </div>
  )
}

export default App
