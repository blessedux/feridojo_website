"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { smoothScroll } from "@/app/utils/smoothScroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    smoothScroll(target)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  const linkClasses = "relative text-white px-3 py-2 rounded-md text-sm font-medium group overflow-hidden transition-colors duration-500 ease-in-out hover:text-red-500"
  const underlineClasses = "absolute bottom-0 left-0 w-full h-0.5 bg-red-500 translate-x-[-100%] transition-all duration-500 ease-in-out group-hover:translate-x-0"

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center h-16 cs-logo" aria-label="back to home">
              <Image
                src="/FERIDOJO LOGO 1.svg"
                alt="Feridojo Logo"
                width={160}
                height={160}
                className="w-100 h-16"
                aria-hidden="true"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-4">
              <a href="#inicio" className={linkClasses} onClick={(e) => handleNavClick(e, "#inicio")}>
                Inicio
                <span className={underlineClasses} />
              </a>
              <a href="#servicios" className={linkClasses} onClick={(e) => handleNavClick(e, "#servicios")}>
                Sobre Nosotros
                <span className={underlineClasses} />
              </a>
              <a href="#trabajos" className={linkClasses} onClick={(e) => handleNavClick(e, "#trabajos")}>
                Trabajos
                <span className={underlineClasses} />
              </a>
              <a href="#testimonios" className={linkClasses} onClick={(e) => handleNavClick(e, "#testimonios")}>
                Testimonios
                <span className={underlineClasses} />
              </a>
            </div>

            <a href="#contacto" className="btn-primary" onClick={(e) => handleNavClick(e, "#contacto")}>
              Agendar una cita
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "#inicio")}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "#servicios")}
            >
              Servicios
            </a>
            <a
              href="#trabajos"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "#trabajos")}
            >
              Trabajos
            </a>
            <a
              href="#testimonios"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "#testimonios")}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "#contacto")}
            >
              Contacto
            </a>
            <a 
              href="#contacto" 
              className="btn-primary block text-center mt-4"
              onClick={(e) => handleNavClick(e, "#contacto")}
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

