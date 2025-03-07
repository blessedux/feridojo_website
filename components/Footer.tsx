import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/FERIDOJO LOGO 1.svg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-auto"
              />

            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Somos especialistas en servicios de gasfitería y bombas hidráulicas, ofreciendo soluciones profesionales
              para hogares y empresas en Chile desde 2005.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="mailto:info@feridojo.cl" className="text-gray-400 hover:text-white">
                <Mail />
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
              <li>+56 9 1234 5678</li>
              <li>
                <a href="mailto:info@feridojo.cl" className="hover:text-white">
                  info@feridojo.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Feridojo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

