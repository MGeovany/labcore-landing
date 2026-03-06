import type { SampleQueueRow } from './types'
import { StatusBadge } from './StatusBadge'

interface SampleQueueTableProps {
  rows: SampleQueueRow[]
}

/** Renders the sample queue table; data comes from props (dependency inversion). */
export function SampleQueueTable({ rows }: SampleQueueTableProps) {
  return (
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
          {rows.map((row) => (
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
              <td className="px-6 py-4 text-sm text-gray-500">{row.test}</td>
              <td className="px-6 py-4">
                <StatusBadge status={row.status} variant={row.statusVariant} />
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
  )
}
