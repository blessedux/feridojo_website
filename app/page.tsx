import Hero from "@/components/Hero"
import ServiceHighlights from "@/components/ServiceHighlights"
import PumpService from "@/components/PumpService"
import Gallery from "@/components/Gallery"
import PumpTypes from "@/components/PumpTypes"
import Testimonials from "@/components/Testimonials"
import ContactCTA from "@/components/ContactCTA"
import LogoSection from '@/components/LogoSection'
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-black to-gray-900 flex-col items-center justify-between">
      <Hero />
      <ServiceHighlights />
      <PumpService />
      <AboutUs />
      <LogoSection />
      <Gallery />
      <PumpTypes />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

