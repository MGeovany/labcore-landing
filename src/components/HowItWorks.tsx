const steps = [
  {
    num: 1,
    filled: true,
    title: 'Order Intake',
    desc: 'Reception registers patient via CI or scan. System checks insurance eligibility instantly.',
  },
  {
    num: 2,
    filled: false,
    borderBlue: true,
    title: 'Specimen & Labels',
    desc: 'Auto-generate unique barcodes. Print labels at point of collection. Zero mismatches.',
  },
  {
    num: 3,
    filled: false,
    borderBlue: false,
    title: 'Processing',
    desc: 'Technicians input results or analyzers auto-transmit data via HL7/ASTM interface.',
  },
  {
    num: 4,
    filled: false,
    borderBlue: false,
    title: 'Validation',
    desc: 'Supervisors review flagged values. One-click approval sends PDF to patient via WhatsApp/Email.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-gray-900 mb-4">
            Workflow Logic
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A seamless digital chain of custody from reception to result delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative bg-white p-8 rounded-2xl shadow-sm z-10">
              <div
                className={
                  'w-16 h-16 rounded-full flex items-center justify-center text-xl font-[family-name:var(--font-display)] mb-6 border-4 border-gray-50 ' +
                  (step.filled
                    ? 'bg-blue-600 text-white'
                    : step.borderBlue
                      ? 'bg-white border-2 border-blue-600 text-blue-600'
                      : 'bg-white border-2 border-gray-200 text-gray-400')
                }
              >
                {step.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
