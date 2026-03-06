import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const items = [
  {
    id: 1,
    question: '¿Cómo funcionan las consultas virtuales?',
    answer:
      'LabCore se integra con tus plataformas de telemedicina o funciona como visor independiente. Los médicos pueden ingresar para ver resultados justo después de la validación.',
  },
  {
    id: 2,
    question: '¿Mis datos están seguros y son compatibles con normativas?',
    answer:
      'Sí. Usamos cifrado AES-256 en reposo y en tránsito. Cumplimos con las leyes locales de protección de datos en LATAM y con estándares HIPAA.',
  },
  {
    id: 3,
    question: '¿Puedo conectar mis analizadores?',
    answer:
      'Sí. Los planes Pro y Enterprise incluyen nuestro módulo Middleware, con soporte para más de 400 analizadores vía HL7 y ASTM.',
  },
  {
    id: 4,
    question: '¿Necesito seguro para usar LabCore?',
    answer:
      'No. LabCore es software para el laboratorio. Incluimos módulos para gestionar reclamaciones de seguros de tus pacientes.',
  },
]

export function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-[family-name:var(--font-display)] text-gray-900 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          Preguntas
          <br />
          frecuentes
        </motion.h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`border-t border-gray-100 ${index === items.length - 1 ? 'border-b' : ''}`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.button
                type="button"
                onClick={() => setActive(active === item.id ? null : item.id)}
                className="w-full py-6 flex items-center justify-between text-left group rounded-lg"
                whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.04)' }}
                whileTap={{ scale: 0.998 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-cyan-500 transition-colors pr-4">
                  {item.question}
                </span>
                <motion.span
                  className="inline-flex text-cyan-500 flex-shrink-0"
                  animate={{ rotate: active === item.id ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {active === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
