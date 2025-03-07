import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="section-container" id="servicios">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
        <div>
          <h2 className="section-title">Venta y Mantenimiento de Bombas Hidráulicas</h2>
          <p className="text-gray-300 mb-6">
            Ofrecemos servicios especializados en la venta, instalación y mantenimiento de todo tipo de bombas
            hidráulicas para uso residencial, comercial e industrial. Nuestros técnicos están altamente capacitados para
            garantizar un servicio de calidad.
          </p>
          <Link href="#contacto" className="btn-primary">
            Solicitar Servicio
          </Link>
        </div>
        <div>
          <Image
            src="/man-kneeling-down-touching-sink-inspecting-pipes.webp"
            alt="Mantenimiento de bombas hidráulicas"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

    </div>
  )
}

