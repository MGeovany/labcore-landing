import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
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
            Gestiona tu lab con <br />
            <span className="text-cyan-500 italic">claridad y precisión</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-1"
          >
            De recepción a validación: ciclo de vida de muestras con
            trazabilidad total.
          </motion.p>

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
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="h-9 sm:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-3 sm:px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white rounded-md border border-gray-200 w-64 mx-auto h-6 flex items-center justify-center text-[10px] text-gray-400">
                  app.labcore.io/dashboard
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 bg-white grid grid-cols-12 gap-4 sm:gap-6 min-h-[320px] sm:min-h-[400px]">
              <div className="hidden md:block col-span-2 space-y-4">
                <div className="h-8 w-24 bg-gray-100 rounded mb-8" />
                <div className="space-y-2">
                  <div className="h-8 w-full bg-cyan-50 text-cyan-500 rounded flex items-center px-3 text-xs font-medium">
                    Panel
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Órdenes
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Pacientes
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Resultados
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
                      Cola de muestras
                    </h3>
                    <p className="text-xs text-gray-400">Hoy: 142 muestras</p>
                  </div>
                  <div className="h-8 w-24 bg-cyan-500 rounded-full" />
                </div>

                <div className="overflow-x-auto rounded-lg sm:rounded-xl border border-gray-100 bg-white -mx-1 sm:mx-0">
                  <table className="w-full min-w-[480px] caption-bottom text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 hover:bg-transparent">
                        <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          ID
                        </th>
                        <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Paciente
                        </th>
                        <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Prueba
                        </th>
                        <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Estado
                        </th>
                        <th className="h-12 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                          Acción
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: '#LAB-092',
                          patient: 'María González',
                          test: 'Hemograma, Perfil lipídico',
                          status: 'En proceso',
                          statusClass: 'bg-amber-100 text-amber-700',
                          action: 'Revisar',
                        },
                        {
                          id: '#LAB-093',
                          patient: 'Carlos Ruiz',
                          test: 'TSH, T4 libre',
                          status: 'Completado',
                          statusClass: 'bg-emerald-100 text-emerald-700',
                          action: 'Imprimir',
                        },
                        {
                          id: '#LAB-094',
                          patient: 'Elena Torres',
                          test: 'Prueba tolerancia glucosa',
                          status: 'Pendiente',
                          statusClass: 'bg-blue-100 text-blue-700',
                          action: 'Validar',
                        },
                      ].map((row) => (
                        <tr
                          key={row.id}
                          className="border-b border-gray-100 transition-colors hover:bg-gray-50/70 last:border-0"
                        >
                          <td className="px-6 py-4 font-mono text-sm font-semibold text-gray-500">
                            {row.id}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {row.patient}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {row.test}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${row.statusClass}`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-sm font-medium text-cyan-500 hover:text-cyan-600 cursor-pointer transition-colors">
                              {row.action}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
