import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Zap, Activity, Building2, CheckCircle } from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { TogglePill } from './ui/TogglePill'
import { staggerContainer, staggerItem } from '../lib/motion'

const ANNUAL_DISCOUNT = 0.8 // 20% off

const plans = [
  {
    icon: Zap,
    iconClass: 'text-gray-400',
    name: 'Essentials',
    desc: 'La base para un mejor diagnóstico.',
    priceMonthly: 49,
    cta: 'Elegir plan',
    features: ['5 usuarios', '1 sede', '1.500 análisis/mes', 'Reportes básicos', 'Soporte por email'],
  },
  {
    icon: Activity,
    iconClass: 'text-cyan-500',
    name: 'Pro Care',
    desc: 'Cobertura completa para labs en crecimiento.',
    priceMonthly: 99,
    cta: 'Elegir plan',
    popular: true,
    features: [
      '**Todo lo de Essentials**',
      '15 usuarios',
      '5.000 análisis/mes',
      'Interfaces con analizadores (ASTM)',
      'Portal del paciente',
      'Soporte prioritario',
    ],
  },
  {
    icon: Building2,
    iconClass: 'text-gray-400',
    name: 'Total Wellness',
    desc: 'Escala ilimitada para redes de clínicas.',
    priceMonthly: 199,
    cta: 'Elegir plan',
    features: [
      '**Todo lo de Pro**',
      'Usuarios ilimitados',
      'Gestión multi-sede',
      'Acceso API personalizado',
      'Gerente de cuenta dedicado',
    ],
  },
]

function FeatureItem({ text }: { text: string }) {
  const isBold = text.startsWith('**') && text.endsWith('**')
  const label = isBold ? text.slice(2, -2) : text
  return (
    <li className="flex gap-3">
      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
      <span className={isBold ? 'font-semibold' : ''}>{label}</span>
    </li>
  )
}

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 to-white -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Precios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-gray-900 mb-6 sm:mb-8">
            Elige el plan
            <br className="hidden sm:block" />
            <span className="sm:inline"> que se adapte a tu lab</span>
          </h2>

          <TogglePill
            value={billing}
            onChange={setBilling}
            items={[
              { id: 'monthly', label: 'Mensual' },
              { id: 'annual', label: <><span>Anual</span><span className="text-[10px] text-green-600 ml-1">-20%</span></> },
            ]}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {plans.map((plan) => {
            const price = billing === 'annual'
              ? Math.round(plan.priceMonthly * ANNUAL_DISCOUNT)
              : plan.priceMonthly
            return (
              <motion.div key={plan.name} variants={staggerItem} className="flex">
                <Card
                  className={`flex flex-col w-full p-6 sm:p-8 ${plan.popular ? 'ring-2 ring-cyan-500/20 relative' : ''}`}
                >
                  {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap">
                    Más popular
                  </div>
                  )}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <plan.icon className={`w-5 h-5 flex-shrink-0 ${plan.iconClass}`} />
                    <h3 className="font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 sm:mb-6">{plan.desc}</p>
                  <div className="flex flex-wrap items-baseline gap-1 mb-4 sm:mb-6">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.name}-${billing}-${price}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-gray-900 inline-block"
                      >
                        ${price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-500 text-sm">/mo</span>
                    <AnimatePresence>
                      {billing === 'annual' && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-xs text-gray-400"
                        >
                          {' '}facturado anualmente
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button as="a" href="#" className="w-full block text-center mb-6 sm:mb-8 min-h-[44px] flex items-center justify-center">
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3 sm:space-y-4 text-sm text-gray-600 flex-1">
                    {plan.features.map((f) => (
                      <FeatureItem key={f} text={f} />
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          className="text-center mt-8 sm:mt-12 text-gray-400 text-xs px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          ¿Más de 20.000 análisis? Contacta a ventas para precios por volumen. Excedentes a USD 0,05 por prueba.
        </motion.p>
      </div>
    </section>
  )
}
