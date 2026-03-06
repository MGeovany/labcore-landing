import { MockupPageLayout } from './MockupPageLayout'
import { MOCKUP_PATIENTS } from './mockup-data'

/** Simulated Pacientes view (doctor, poc-lis-dignitas). */
export function PacientesView() {
  return (
    <MockupPageLayout
      title="Pacientes"
      subtitle="Expediente clínico simplificado, historial de resultados."
    >
      <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white">
        <table className="w-full min-w-[400px] caption-bottom text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Nombre
              </th>
              <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Última orden
              </th>
              <th className="h-12 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Estudios
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCKUP_PATIENTS.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50/70 last:border-0"
              >
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {row.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.lastOrder}
                </td>
                <td className="px-6 py-4 text-right text-sm text-gray-500">
                  {row.studies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MockupPageLayout>
  )
}
