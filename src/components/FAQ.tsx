import { useState } from 'react'

const items = [
  {
    id: 1,
    question: 'How do virtual consultations work?',
    answer:
      'LabCore integrates directly with your existing telemedicine platforms or operates as a standalone viewer. Doctors can log in to see results immediately after validation.',
  },
  {
    id: 2,
    question: 'Is my data secure and compliant?',
    answer:
      'Yes. We use AES-256 encryption at rest and in transit. We are fully compliant with local data protection laws in LATAM as well as HIPAA standards.',
  },
  {
    id: 3,
    question: 'Can I connect my analyzers?',
    answer:
      'Absolutely. The Pro and Enterprise plans include our Middleware module which supports over 400+ analyzers via HL7 and ASTM protocols.',
  },
  {
    id: 4,
    question: 'Do I need insurance to use LabCore?',
    answer:
      'No, LabCore is software for the laboratory itself. However, we have built-in modules to help you manage insurance claims for your patients.',
  },
]

export function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-[family-name:var(--font-display)] text-gray-900 mb-12">
          Frequently asked
          <br />
          questions
        </h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`border-t border-gray-100 ${index === items.length - 1 ? 'border-b' : ''}`}
            >
              <button
                type="button"
                onClick={() => setActive(active === item.id ? null : item.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.question}
                </span>
                <span
                  className={
                    'inline-flex text-blue-600 transition-transform duration-300 ' +
                    (active === item.id ? 'rotate-45' : '')
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                  </svg>
                </span>
              </button>
              {active === item.id && (
                <p className="pb-8 text-gray-500 leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
