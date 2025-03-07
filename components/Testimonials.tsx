export default function Testimonials() {
  const testimonials = [
    {
      title: "Muy amables",
      quote: "Nuestra experiencia con Feridojo ha sido excepcional. Su profesionalismo y atención al detalle realmente destacan. Desde el primer contacto hasta la finalizacíon del proyecto, nos demostraron su compromiso con la excelencia. ¡Recomendamos a Feridojo para cualquier necesidad de gasfitería y bombas de agua de alta calidad!",
      author: "Daniel",
    },
    {
      title: "Calidad",
      quote: "Con Feridojo, encontramos un socio confiable en gasfitería y suministro de bombas de agua. Su equipo dedicado y la calidad de sus productos nos han dejado completamente satisfechos. ¡Una elección acertada para cualquier proyecto!",
      author: "Amanda",
    },
  ]

  return (
    <div className="bg-gray-900 py-24" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-orange-500 uppercase tracking-wider mb-6">TESTIMONIOS</h3>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Contamos con servicios<br />
          de mantención y<br />
          reparación para las<br />
          marcas especificadas.
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          Nos enorgullece contar con la confianza de cientos de clientes y empresas en Chile.
          En cada proyecto, trabajamos incansablemente para superar las expectativas y construir
          relaciones duraderas basadas en la calidad y la fiabilidad de nuestros servicios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 shadow-lg rounded-2xl p-8">
              <div className="text-orange-500 text-6xl font-serif mb-4">"</div>
              <h3 className="text-2xl font-bold text-white mb-4">{testimonial.title}</h3>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <p className="text-gray-400">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

