import Image from "next/image"

export default function Gallery() {
  const projects = [
    { src: "/placeholder.svg?height=300&width=300", alt: "Instalación de bomba" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Reparación de tubería" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Mantenimiento de válvula" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Sistema de bombeo" },
  ]

  return (
    <div className="bg-gray-800 py-16" id="trabajos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Nuestros trabajos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

