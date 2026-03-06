import { MockupPageLayout } from './MockupPageLayout'
import { MOCKUP_RESULTS } from './mockup-data'

/** Simulated Resultados view (supervisor/doctor, poc-lis-dignitas). */
export function ResultadosView() {
  return (
    <MockupPageLayout
      title="Resultados"
      subtitle="Valores, rangos normales, validación y descarga PDF."
    >
      <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white">
        <table className="w-full min-w-[400px] caption-bottom text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                ID
              </th>
              <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Paciente
              </th>
              <th className="h-12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Prueba
              </th>
              <th className="h-12 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCKUP_RESULTS.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50/70 last:border-0"
              >
                <td className="px-6 py-4 font-mono text-sm font-semibold text-gray-500">
                  {row.id}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {row.patient}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.test}</td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={
                      row.status === 'Validado'
                        ? 'text-emerald-600 text-sm font-medium'
                        : 'text-amber-600 text-sm font-medium'
                    }
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MockupPageLayout>
  )
}
