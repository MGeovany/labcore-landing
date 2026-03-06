import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { DashboardMockup } from './hero-mockup'
import { staggerContainer, staggerItem } from '../lib/motion'

const easeOutExpo = [0.22, 1, 0.36, 1] as const
const badgeTransition = { duration: 0.5, ease: easeOutExpo }
const titleTransition = { duration: 0.6, delay: 0.1, ease: easeOutExpo }
const mockupTransition = { duration: 0.7, delay: 0.3, ease: easeOutExpo }

export function Hero() {
  return (
    <section
      id="product"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            transition={badgeTransition}
            className="inline-block py-1 px-3 rounded-full bg-cyan-50 text-cyan-500 text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan-100"
          >
            SaaS para laboratorios LATAM
          </motion.span>

          <motion.h1
            variants={staggerItem}
            transition={titleTransition}
            className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-gray-900 leading-[1.1] mb-6 sm:mb-8"
          >
            Gestiona tu laboratorio con <br />
            <span className="text-cyan-500 italic">claridad y precisión</span>
          </motion.h1>

          <motion.div
            variants={staggerItem}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-1 space-y-3"
          >
            <p>
              Pensado para laboratorios que buscan menos errores, más control
              y un flujo claro de principio a fin.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/demo">
              <Button>Solicitar demo</Button>
            </Link>
            <Button
              as="a"
              href="#pricing"
              variant="secondary"
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Ver precios
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium text-gray-500"
          >
            {[
              'Reduce errores hasta 40%',
              'Trazabilidad orden–muestra–resultado',
              'Cola de muestras hasta validación',
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          className="relative max-w-5xl mx-auto px-0 sm:px-0"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={mockupTransition}
        >
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full transform scale-90 translate-y-12 -z-10" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
