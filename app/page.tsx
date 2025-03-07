import Hero from "@/components/Hero"
import ServiceHighlights from "@/components/ServiceHighlights"
import PumpService from "@/components/PumpService"
import Gallery from "@/components/Gallery"
import PumpTypes from "@/components/PumpTypes"
import Testimonials from "@/components/Testimonials"
import ContactCTA from "@/components/ContactCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <PumpService />
      <Gallery />
      <PumpTypes />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

