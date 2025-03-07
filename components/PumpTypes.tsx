import Image from "next/image"
import Link from "next/link"

export default function PumpTypes() {
  const pumpTypes = [
    {
      title: "Bombas de Alta y Ultra Presión",
      description: "Ideales para sistemas que requieren alta presión de agua",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Bombas de superficie",
      description: "Perfectas para el suministro de agua en hogares y jardines",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Bombas sumergibles",
      description: "Diseñadas para trabajar completamente sumergidas en agua",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Bombas de Pozos profundos",
      description: "Especializadas para extraer agua desde grandes profundidades",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Hidroneumáticos",
      description: "Sistemas completos para mantener presión constante de agua",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Motobombas a gasolina y Motobombas a diesel",
      description: "Soluciones portátiles para bombeo en áreas sin electricidad",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="section-container" id="bombas">
      <h2 className="section-title text-center mb-12">Tipos de Bombas</h2>

      <div className="space-y-16">
        {pumpTypes.map((pump, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 ${index % 2 === 0 ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-[2fr_1fr] md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="relative h-64 md:h-auto">
              <Image src={pump.image || "/placeholder.svg"} alt={pump.title} fill className="object-cover rounded-lg" />
            </div>
            <div className={index % 2 === 0 ? "md:pl-8" : "md:pr-8"}>
              <h3 className="text-2xl font-bold mb-4">{pump.title}</h3>
              <p className="text-gray-300 mb-6">{pump.description}</p>
              <Link href="#contacto" className="btn-primary">
                Más Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

