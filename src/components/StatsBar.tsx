import { motion } from 'motion/react'
import { staggerContainer, staggerItem } from '../lib/motion'

const stats = [
  { value: '2.5h', label: 'Ahorro diario por técnico' },
  { value: '100%', label: 'Trazabilidad' },
  { value: '0', label: 'Muestras perdidas' },
  { value: '15m', label: 'Tiempo de configuración' },
]

export function StatsBar() {
  return (
    <section className="py-10 sm:py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8"
        >
          Lo que logran los labs desde el día 1
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {stats.map(({ value, label }) => (
            <motion.div key={label} variants={staggerItem}>
              <div className="text-2xl sm:text-3xl font-[family-name:var(--font-display)] text-gray-900 mb-1">
                {value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
