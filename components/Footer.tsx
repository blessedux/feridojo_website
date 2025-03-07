import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">GasfiterPro</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Somos especialistas en servicios de gasfitería y bombas hidráulicas, ofreciendo soluciones profesionales
              para hogares y empresas desde 2005.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#trabajos" className="text-gray-400 hover:text-white">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link href="#bombas" className="text-gray-400 hover:text-white">
                  Bombas
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Principal 1234, Santiago, Chile</li>
              <li>+56 9 1234 5678</li>
              <li>contacto@gasfiterpro.cl</li>
              <li>Lunes a Viernes: 8:00 - 18:00</li>
              <li>Sábados: 9:00 - 14:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GasfiterPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

