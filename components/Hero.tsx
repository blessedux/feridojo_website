import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[65vh] w-full">
      <div className="absolute inset-0">
        <Image
          src="/man-kneeling-down-touching-sink-inspecting-pipes.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Tu Gasfiter de Confianza
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Soluciones rápidas y eficientes para tus problemas de gasfitería.
        </p>
        <a
          href="https://wa.me/+56955668961"
          className="btn-primary inline-block w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servicio inmediato
        </a>
      </div>
    </section>
  )
}

