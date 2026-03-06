import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Button } from './ui/Button'

export function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-gray-200 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white md:text-3xl">
            Lleva tu laboratorio al siguiente nivel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Órdenes, muestras, resultados y validación — con trazabilidad completa. Solicita una demo y descubre cómo LabCore simplifica tu operación.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/demo">
              <Button
                variant="secondary"
                className="shadow-lg !py-3.5 !px-8 text-base"
              >
                Solicitar demo
              </Button>
            </Link>
            <a
              href="mailto:marlon.castro@thefndrs.com?subject=Contacto ventas - LabCore"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Contactar ventas
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            marlon.castro@thefndrs.com · Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
