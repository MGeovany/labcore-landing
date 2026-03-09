import { MockupPageLayout } from './MockupPageLayout'
import { MOCKUP_ORDERS } from './mockup-data'

/** Simulated Órdenes entrantes view (reception, poc-lis-dignitas). */
export function OrdenesView() {
  return (
    <MockupPageLayout
      title="Órdenes entrantes"
      subtitle="Convierte órdenes en muestras listas para el flujo técnico."
      actionLabel="Escanear orden"
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
                Estado
              </th>
              <th className="h-12 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCKUP_ORDERS.map((row) => (
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
                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.status}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-sm font-medium text-cyan-500 hover:text-cyan-600 cursor-pointer">
                    {row.action}
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
