export default function Testimonials() {
  const testimonials = [
    {
      quote: "Excelente servicio, rápido y profesional. Resolvieron mi problema de bomba en menos de 24 horas.",
      author: "María González",
      position: "Cliente Residencial",
    },
    {
      quote:
        "Contratamos sus servicios para el mantenimiento de nuestro sistema de bombeo industrial y quedamos muy satisfechos con los resultados.",
      author: "Carlos Ramírez",
      position: "Gerente Industrial",
    },
  ]

  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Resuelve hoy con nosotros</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="text-yellow-400 text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Contamos con servicios de mantención y reparación para las principales marcas.
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Nuestros técnicos están capacitados para trabajar con todas las marcas líderes del mercado, garantizando un
            servicio de calidad y confianza.
          </p>
        </div>
      </div>
    </div>
  )
}

