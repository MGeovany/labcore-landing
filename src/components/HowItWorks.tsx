import { motion } from 'motion/react'
import { staggerContainer, staggerItem } from '../lib/motion'

const steps = [
  {
    num: 1,
    filled: true,
    title: 'Recepción de órdenes',
    desc: 'Recepción registra al paciente por cédula o escaneo. El sistema verifica elegibilidad de seguro al instante.',
  },
  {
    num: 2,
    filled: false,
    borderBlue: true,
    title: 'Muestras y etiquetas',
    desc: 'Códigos de barras únicos automáticos. Impresión de etiquetas en punto de toma. Cero errores de identificación.',
  },
  {
    num: 3,
    filled: false,
    borderBlue: false,
    title: 'Procesamiento',
    desc: 'Los técnicos cargan resultados o los analizadores envían datos por interfaz HL7/ASTM.',
  },
  {
    num: 4,
    filled: false,
    borderBlue: false,
    title: 'Validación',
    desc: 'Supervisores revisan valores marcados. Aprobación en un clic y envío de PDF al paciente por WhatsApp/Email.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-display)] text-gray-900 mb-4">
            Lógica del flujo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cadena de custodia digital desde la recepción hasta la entrega de resultados.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-0" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="relative bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm z-10"
            >
              <div
                className={
                  'w-16 h-16 rounded-full flex items-center justify-center text-xl font-[family-name:var(--font-display)] mb-6 border-4 border-gray-50 ' +
                  (step.filled
                    ? 'bg-cyan-500 text-white'
                    : step.borderBlue
                      ? 'bg-white border-2 border-cyan-500 text-cyan-500'
                      : 'bg-white border-2 border-gray-200 text-gray-400')
                }
              >
                {step.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
