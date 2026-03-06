import { useState } from 'react'
import { UserRound, Microscope, ShieldCheck, Settings } from 'lucide-react'
import { Card } from './ui/Card'

const roles = [
  {
    value: 'reception',
    label: 'Reception',
    icon: UserRound,
    title: 'Front-desk intake, fast and error-free',
    description:
      'Reception staff create orders, capture patient data, and generate barcoded specimens in seconds.',
    tasks: [
      'Create new orders with patient info, requested tests, and urgency',
      'Auto-generate specimen IDs and print label PDFs',
      'Scan barcodes to look up any order or specimen instantly',
      'Track order status from creation to completion',
    ],
    outcomes: [
      'Faster patient check-in with fewer data-entry errors',
      'No more lost or misidentified samples',
    ],
  },
  {
    value: 'technician',
    label: 'Technician',
    icon: Microscope,
    title: 'A clear queue, from receipt to results',
    description:
      'Technicians process specimens through a structured queue — receive, analyze, enter results, and send to validation.',
    tasks: [
      'View and manage the specimen processing queue',
      'Mark specimens as received, in-progress, or complete',
      'Enter results with built-in validation and draft saving',
      'Flag incidents or anomalies for supervisor review',
    ],
    outcomes: [
      'Structured workflow eliminates guesswork and backtracking',
      'Draft results mean no lost work between shifts',
    ],
  },
  {
    value: 'supervisor',
    label: 'Supervisor',
    icon: ShieldCheck,
    title: 'Validate with confidence, audit with ease',
    description:
      'Supervisors review consolidated results per order and validate, reject, or request re-runs with full traceability.',
    tasks: [
      'Review all results grouped by order for efficient validation',
      'Approve, reject, or request re-runs on individual results',
      'Access the full audit timeline for any specimen or order',
      'Search and filter audit records by date, user, or action',
    ],
    outcomes: [
      'Consolidated view reduces review time by half',
      'Complete audit trail for regulatory compliance',
    ],
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: Settings,
    title: 'Full control across all sites',
    description:
      'Available on Enterprise. Administrators manage users, configure multi-site settings, and oversee analytics across the organization.',
    tasks: [
      'Admin dashboard for user and site management',
      'Seed or demo data for training and onboarding',
      'Analytics dashboards with KPIs and performance charts',
      'Priority support and custom configuration options',
    ],
    outcomes: [
      'Centralized control over labs and collection points',
      'Data-driven decisions with real-time analytics',
    ],
  },
]

export function Roles() {
  const [activeRole, setActiveRole] = useState(roles[0].value)
  const currentRole = roles.find((r) => r.value === activeRole) ?? roles[0]

  return (
    <section className="border-t border-gray-100 bg-gray-50/60 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Built for every role
          </p>
          <h2 className="mt-3 text-2xl font-[family-name:var(--font-display)] font-bold tracking-tight text-gray-900 md:text-3xl">
            What each role gets in LabCore
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Tailored workflows for every member of your laboratory team.
          </p>
        </div>

        {/* Role tabs */}
        <div className="mt-12">
          <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-1 rounded-xl bg-gray-100/80 p-1.5">
            {roles.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setActiveRole(role.value)}
                className={
                  'flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ' +
                  (activeRole === role.value
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900')
                }
              >
                <role.icon className="size-4" />
                {role.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-8">
            <Card className="overflow-hidden rounded-xl border border-gray-100 p-8 shadow-sm md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left: description + outcomes */}
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-gray-900">
                    {currentRole.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-500">
                    {currentRole.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Key outcomes
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {currentRole.outcomes.map((outcome, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-900"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-600" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Right: tasks */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    What they do in LabCore
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {currentRole.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/80 p-3.5"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-900">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
