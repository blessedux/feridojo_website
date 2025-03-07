import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Plomero profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Tu Gasfiter de Confianza
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Soluciones técnicas y eficientes para tus problemas de gasfitería
          </p>
          <Link href="#contacto" className="btn-primary text-lg px-6 py-3">
            Contáctanos Ahora
          </Link>
        </div>
      </div>
    </div>
  )
}

