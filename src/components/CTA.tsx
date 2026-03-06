import { Button } from './ui/Button'
import FadeIn from './FadeIn'

export function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-gray-200 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white md:text-3xl">
            Lleva tu laboratorio al siguiente nivel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Órdenes, muestras, resultados y validación — con trazabilidad completa. Solicita una demo y descubre cómo LabCore simplifica tu operación.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              as="a"
              href="mailto:hola@labcore.io"
              variant="secondary"
              className="shadow-lg !py-3.5 !px-8 text-base"
            >
              Solicitar demo
            </Button>
            <a
              href="mailto:hola@labcore.io"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Contactar ventas
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            hola@labcore.io · Respuesta en menos de 24 horas
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
