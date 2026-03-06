import { useState } from 'react'
import { Zap, Activity, Building2, CheckCircle } from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { TogglePill } from './ui/TogglePill'

const plans = [
  {
    icon: Zap,
    iconClass: 'text-gray-400',
    name: 'Essentials',
    desc: 'Your foundation for better diagnostics.',
    price: '$49',
    cta: 'Choose plan +',
    features: ['5 Users', '1 Site', '1,500 Analyses / mo', 'Basic Reports', 'Email Support'],
  },
  {
    icon: Activity,
    iconClass: 'text-blue-600',
    name: 'Pro Care',
    desc: 'Comprehensive care for growing labs.',
    price: '$99',
    cta: 'Choose plan +',
    popular: true,
    features: [
      '**Everything in Essentials**',
      '15 Users',
      '5,000 Analyses / mo',
      'Analyzer Interfaces (ASTM)',
      'Patient Portal',
      'Priority Support',
    ],
  },
  {
    icon: Building2,
    iconClass: 'text-gray-400',
    name: 'Total Wellness',
    desc: 'Unlimited scale for clinic networks.',
    price: '$199',
    cta: 'Choose plan +',
    features: [
      '**Everything in Pro**',
      'Unlimited Users',
      'Multi-site Management',
      'Custom API Access',
      'Dedicated Account Manager',
    ],
  },
]

function FeatureItem({ text }: { text: string }) {
  const isBold = text.startsWith('**') && text.endsWith('**')
  const label = isBold ? text.slice(2, -2) : text
  return (
    <li className="flex gap-3">
      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <span className={isBold ? 'font-semibold' : ''}>{label}</span>
    </li>
  )
}

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-gray-900 mb-8">
            Choose the plan
            <br />
            that fits your lab
          </h2>

          <TogglePill
            value={billing}
            onChange={setBilling}
            items={[
              { id: 'monthly', label: 'Monthly' },
              { id: 'annual', label: <><span>Annual</span><span className="text-[10px] text-green-600 ml-1">-20%</span></> },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 ${plan.popular ? 'ring-2 ring-blue-600/10 relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                <plan.icon className={`w-5 h-5 ${plan.iconClass}`} />
                <h3 className="font-bold text-gray-900">{plan.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-[family-name:var(--font-display)] text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">/mo</span>
              </div>

              <Button as="a" href="#" className="w-full block text-center mb-8">
                {plan.cta}
              </Button>

              <ul className="space-y-4 text-sm text-gray-600">
                {plan.features.map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-400 text-xs">
          Need more than 20,000 analyses? Contact sales for volume pricing. Overage fees apply at $0.05/test.
        </p>
      </div>
    </section>
  )
}
