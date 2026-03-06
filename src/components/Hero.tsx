import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section id="product" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-6 border border-blue-100">
            SaaS for LATAM Laboratories
          </span>

          <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-gray-900 leading-[1.1] mb-8">
            Run your lab with <br />
            <span className="text-blue-600 italic">clarity & precision</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From order intake to validation, streamline your entire specimen lifecycle with full traceability. Built for modern diagnostics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button as="a" href="#">
              Request a demo
            </Button>
            <Button as="a" href="#pricing" variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2">
              View pricing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            {['ISO 15189 Ready', 'Reduce errors by 40%', 'Multi-site Cloud Sync'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full transform scale-90 translate-y-12 -z-10" />
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
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

            <div className="p-6 lg:p-8 bg-white grid grid-cols-12 gap-6 min-h-[400px]">
              <div className="hidden md:block col-span-2 space-y-4">
                <div className="h-8 w-24 bg-gray-100 rounded mb-8" />
                <div className="space-y-2">
                  <div className="h-8 w-full bg-blue-50 text-blue-600 rounded flex items-center px-3 text-xs font-medium">
                    Dashboard
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Orders
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Patients
                  </div>
                  <div className="h-8 w-full hover:bg-gray-50 rounded flex items-center px-3 text-xs text-gray-500">
                    Results
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">Specimen Queue</h3>
                    <p className="text-xs text-gray-400">Today: 142 Samples</p>
                  </div>
                  <div className="h-8 w-24 bg-blue-600 rounded-full" />
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 h-10 border-b flex items-center px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="w-1/6">ID</div>
                    <div className="w-1/4">Patient</div>
                    <div className="w-1/4">Test</div>
                    <div className="w-1/6">Status</div>
                    <div className="w-1/6 text-right">Action</div>
                  </div>
                  <div className="divide-y">
                    {[
                      { id: '#LAB-092', patient: 'Maria Gonzales', test: 'CBC, Lipid Panel', status: 'Processing', statusClass: 'bg-amber-100 text-amber-700', action: 'Review' },
                      { id: '#LAB-093', patient: 'Carlos Ruiz', test: 'TSH, T4 Free', status: 'Completed', statusClass: 'bg-green-100 text-green-700', action: 'Print' },
                      { id: '#LAB-094', patient: 'Elena Torres', test: 'Glucose Tolerance', status: 'Pending', statusClass: 'bg-blue-100 text-blue-700', action: 'Validate' },
                    ].map((row) => (
                      <div
                        key={row.id}
                        className="h-14 flex items-center px-4 text-xs hover:bg-blue-50/30 transition-colors"
                      >
                        <div className="w-1/6 font-mono text-gray-500">{row.id}</div>
                        <div className="w-1/4 font-medium">{row.patient}</div>
                        <div className="w-1/4 text-gray-600">{row.test}</div>
                        <div className="w-1/6">
                          <span className={`${row.statusClass} px-2 py-0.5 rounded-full text-[10px]`}>
                            {row.status}
                          </span>
                        </div>
                        <div className="w-1/6 text-right text-blue-600">{row.action}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
