import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactCTA() {
  return (
    <div className="section-container" id="contacto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Contáctanos</h2>
          <p className="text-gray-300 mb-8">
            Estamos disponibles para atender tus consultas y brindarte el mejor servicio. No dudes en contactarnos para
            obtener una cotización o programar una visita técnica.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-red-500 mr-3" />
              <span>+56 9 1234 5678</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-red-500 mr-3" />
              <span>contacto@gasfiterpro.cl</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-red-500 mr-3" />
              <span>Av. Principal 1234, Santiago, Chile</span>
            </div>
          </div>

          <div className="mt-8">
            <Link href="#" className="btn-primary">
              Solicitar Cotización
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Envíanos un mensaje</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

