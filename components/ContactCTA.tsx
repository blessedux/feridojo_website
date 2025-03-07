import Link from "next/link"

export default function ContactCTA() {
  return (
    <div className="bg-gray-900 py-24 mt-24 text-center" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-orange-500 uppercase tracking-wider mb-6">CONTÁCTANOS</h3>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Resuélvelo hoy con nosotros
        </h2>

        <p className="text-gray-300 mb-12">
        Contacta con nosotros hoy mismo y descubre por qué tantos clientes confían en nuestro servicio de gasfitera. Deja que Feridojo se encargue, para que tú puedas disfrutar de la tranquilidad que te mereces. No dejes que los problemas de fontanería te quiten el sueo. ¡Haz clic en 'Obtener Presupuesto Gratuito' y djanos encargarnos de todo por ti! En Feridojo, tu satisfacción es nuestra prioridad.
        </p>

        <Link 
          href="https://wa.me/+56955668961"
          target="_blank"
          className="relative inline-flex items-center justify-center px-8 py-4 font-medium text-white rounded-md overflow-hidden group bg-red-600 hover:bg-red-700 transition-colors"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
          <span className="relative z-10 flex items-center">
            Solicita un presupuesto gratis
          </span>
        </Link>
      </div>
    </div>
  )
}

