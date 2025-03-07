"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

type GalleryCategory = 'productos' | 'instalaciones' | 'mantenimiento'

interface GalleryItem {
  src: string
  alt: string
  category: GalleryCategory
  title: string
  description: string
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('productos')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      src: "/blue-pump.webp",
      alt: "Bomba centrífuga de alta eficiencia",
      category: "productos",
      title: "Bombas Centrífugas Industriales",
      description: "Equipos de última generación con eficiencia superior al 85% y certificación ISO 9001"
    },
    {
      src: "/green-pump.webp",
      alt: "Sistema de presión constante",
      category: "productos",
      title: "Sistemas de Presión Constante",
      description: "Tecnología VFD para mantener presión estable y reducir consumo energético hasta un 40%"
    },
    {
      src: "/main-blue-hose.webp",
      alt: "Bomba sumergible para pozo",
      category: "productos",
      title: "Bombas Sumergibles",
      description: "Diseñadas para pozos profundos, con protección IP68 y materiales anticorrosivos"
    },
    {
      src: "/silver-plumbery.webp",
      alt: "Sistema hidroneumático",
      category: "productos",
      title: "Sistemas Hidroneumáticos",
      description: "Tanques presurizados con membrana EPDM y conexiones en acero inoxidable AISI 304"
    },
    {
      src: "/industrial-pump.webp",
      alt: "Instalación de sistema industrial",
      category: "instalaciones",
      title: "Montaje Industrial",
      description: "Instalaciones certificadas bajo norma ISO 15874 para sistemas de presión"
    },
    {
      src: "/wall-with-tubes.webp",
      alt: "Sistema de distribución de agua",
      category: "instalaciones",
      title: "Redes de Distribución",
      description: "Diseño e instalación de redes con software de simulación hidráulica"
    },
    {
      src: "/industrial-plumbing2.webp",
      alt: "Sistema de bombeo múltiple",
      category: "instalaciones",
      title: "Sistemas Múltiples",
      description: "Configuración de bombas en paralelo con alternancia automática y respaldo"
    },
    {
      src: "/plumber-in-kitchen-sink.webp",
      alt: "Instalación residencial",
      category: "instalaciones",
      title: "Soluciones Residenciales",
      description: "Instalaciones domésticas con garantía de 5 años en mano de obra"
    },
    {
      src: "/plumber-fixing-pump.webp",
      alt: "Mantenimiento preventivo",
      category: "mantenimiento",
      title: "Mantenimiento Preventivo",
      description: "Programas personalizados con checklist de 25 puntos de inspección"
    },
    {
      src: "/technician-worker-cutting-metal-with-many-sharp-sparks-using-equipments-cat-iron_158595-8141.webp",
      alt: "Reparación especializada",
      category: "mantenimiento",
      title: "Reparaciones Especializadas",
      description: "Técnicos certificados con más de 10 años de experiencia en equipos industriales"
    },
    {
      src: "/close-up-hand-repairman-professional-builder-working-indoors-repairing_155003-7272.webp",
      alt: "Diagnóstico técnico",
      category: "mantenimiento",
      title: "Diagnóstico Avanzado",
      description: "Análisis con equipos digitales para detección temprana de fallas"
    },
    {
      src: "/plumber-in-bathroom.webp",
      alt: "Servicio de emergencia",
      category: "mantenimiento",
      title: "Servicio 24/7",
      description: "Atención de emergencias con tiempo de respuesta menor a 2 horas"
    }
  ]

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section className="bg-gray-900 py-16" id="trabajos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Nuestros trabajos</h2>
          
          {/* Category Toggle */}
          <div className="flex gap-6 items-center">
            {(['productos', 'instalaciones', 'mantenimiento'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`gallery-toggle-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="gallery-card cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="gallery-card-image">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div 
                  className="gallery-card-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal Gallery */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-transparent border-0 p-0">
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video"
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

