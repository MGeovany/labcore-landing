import { Nav } from './components/Nav'
import { AmbientGlow } from './components/AmbientGlow'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { HowItWorks } from './components/HowItWorks'
import { Roles } from './components/Roles'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative">
      <AmbientGlow />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <Roles />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
