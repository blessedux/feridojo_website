"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
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
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios
              </Link>
              <Link href="#trabajos" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
                Trabajos
              </Link>
              <Link href="#bombas" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
                Bombas
              </Link>
              <Link href="#contacto" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="#contacto" className="btn-primary">
              Contáctanos
            </Link>
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
            <Link
              href="/"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#trabajos"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Trabajos
            </Link>
            <Link
              href="#bombas"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Bombas
            </Link>
            <Link
              href="#contacto"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link href="#contacto" className="btn-primary block text-center mt-4" onClick={() => setIsMenuOpen(false)}>
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

