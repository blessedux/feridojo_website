import { Wrench, Home, Clock } from "lucide-react"

export default function ServiceHighlights() {
  const services = [
    {
      icon: <Wrench size={36} className="text-red-500" />,
      title: "Servicio 24/7",
      description: "Atendemos emergencias a cualquier hora del día",
    },
    {
      icon: <Home size={36} className="text-red-500" />,
      title: "Residencial",
      description: "Soluciones para hogares y edificios residenciales",
    },
    {
      icon: <Clock size={36} className="text-red-500" />,
      title: "Rápida Respuesta",
      description: "Atención inmediata para resolver tus problemas",
    },
  ]

  return (
    <div className="bg-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

