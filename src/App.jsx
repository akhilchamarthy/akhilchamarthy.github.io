import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import AIData from './components/AIData'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void text-slate-100 min-h-screen overflow-x-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <AIData />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
