import Image from "next/image"
import Link from "next/link"

export default function PumpTypes() {
  const pumpTypes = [
    {
      title: "BOMBAS DE ALTA Y ULTRA PRESIÓN",
      subtitle: "Para uso domestico, industrial y agrícola",
      description: "Equipos de tipo centrifugo, para impulsión de aguas claras, no cargadas. General Pump.",
      image: "/blue-pump.webp",
      brands: "Trabajamos con Calpeda, Reggio, Bestflow, Stair, Pedrollo, Leo"
    },
    {
      title: "BOMBAS DE SUPERFICIE",
      subtitle: "Almacena agua a grandes alturas manometricas",
      description: "Equipos para abastecimiento de agua limpia proveniente de pozos profundos o norias.",
      image: "/green-pump.webp",
      brands: "Trabajamos con Calpeda, Reggio, Bestflow, Stair, Pedrollo, Leo"
    },
    {
      title: "BOMBAS SUMERGIBLES",
      subtitle: "Filtración de aguas de piletas",
      description: "Bombas especialmente diseñadas para el bombeo y filtración de aguas de piletas privadas y publicas, de grandes caudales y altos rendimientos, con alta resistencia a la abrasión química por productos desinfectantes.",
      image: "/main-blue-hose.webp",
      brands: "Trabajamos con Harven, Dreno, Bestflow, Pedrollo, Zenit, Leo"
    },
    {
      title: "BOMBAS DE POZOS PROFUNDOS",
      subtitle: "Alta eficiencia y durabilidad",
      description: "Bombas diseñadas específicamente para la extracción de agua desde grandes profundidades, con materiales resistentes a la corrosión.",
      image: "/industrial-pump.webp",
      brands: "Trabajamos con Subline, Stair, Pedrollo"
    },
    {
      title: "HIDRONEUMÁTICOS",
      subtitle: "Presión constante garantizada",
      description: "Sistemas completos para mantener presión constante de agua en edificios y residencias.",
      image: "/silver-plumbery.webp",
      brands: "Varem, Aquasystem, Bestflow"
    },
    {
      title: "MOTOBOMBAS A GASOLINA Y DIESEL",
      subtitle: "Soluciones portátiles de alta potencia",
      description: "Ideales para lugares sin acceso a electricidad o como sistemas de respaldo.",
      image: "/industrial-plumbing2.webp",
      brands: "Leo y Flowmak"
    },
  ]

  return (
    <div className="bg-gray-900 py-16" id="bombas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {pumpTypes.map((pump, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-[2fr_1fr]"
              } gap-8 items-center bg-gray-800 rounded-lg overflow-hidden`}
            >
              <div className="relative h-80 md:h-[400px] w-full">
                <Image 
                  src={pump.image} 
                  alt={pump.title} 
                  fill 
                  className="object-cover w-full h-full z-0" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                {/* Circular Logo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-black/80 rounded-full p-4 w-24 h-24 flex items-center justify-center">
                    <Image
                      src="/FERIDOJO LOGO 1.svg"
                      alt="Feridojo Logo"
                      width={60}
                      height={60}
                      className="opacity-80"
                    />
                  </div>
                </div>
              </div>
              <div className={`p-8 ${index % 2 === 0 ? "" : "order-first"}`}>
                <div className="text-orange-500 mb-2 text-sm font-medium">
                  {pump.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {pump.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {pump.description}
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  {pump.brands}
                </p>
                <Link 
                  href="https://wa.me/+56955668961" 
                  target="_blank"
                  className="btn-primary"
                >
                  Cotizar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

