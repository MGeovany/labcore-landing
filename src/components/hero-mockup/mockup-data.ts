import type { MockupNavItem, SampleQueueRow } from './types'

/**
 * Sidebar items aligned with poc-lis-dignitas: Panel, Órdenes, Pacientes, Resultados.
 * Clicking switches the mockup main content (see DashboardMockup).
 */
export const MOCKUP_NAV_ITEMS: MockupNavItem[] = [
  { id: 'panel', label: 'Panel' },
  { id: 'ordenes', label: 'Órdenes' },
  { id: 'pacientes', label: 'Pacientes' },
  { id: 'resultados', label: 'Resultados' },
]

export const SAMPLE_QUEUE_ROWS: SampleQueueRow[] = [
  {
    id: '#LAB-092',
    patient: 'María González',
    test: 'Hemograma, Perfil lipídico',
    status: 'En proceso',
    statusVariant: 'inprogress',
    action: 'Revisar',
  },
  {
    id: '#LAB-093',
    patient: 'Carlos Ruiz',
    test: 'TSH, T4 libre',
    status: 'Completado',
    statusVariant: 'completed',
    action: 'Imprimir',
  },
  {
    id: '#LAB-094',
    patient: 'Elena Torres',
    test: 'Prueba tolerancia glucosa',
    status: 'Pendiente',
    statusVariant: 'pending',
    action: 'Validar',
  },
]

/** Mock rows for Órdenes view (reception). */
export const MOCKUP_ORDERS = [
  {
    id: '#ORD-801',
    patient: 'María González',
    status: 'Sin muestras',
    action: 'Generar',
  },
  {
    id: '#ORD-802',
    patient: 'Carlos Ruiz',
    status: 'Listo para lab',
    action: 'Ver',
  },
  {
    id: '#ORD-803',
    patient: 'Elena Torres',
    status: 'Sin muestras',
    action: 'Generar',
  },
]

/** Mock rows for Pacientes view. */
export const MOCKUP_PATIENTS = [
  { id: '1', name: 'María González', lastOrder: 'Hoy', studies: '3' },
  { id: '2', name: 'Carlos Ruiz', lastOrder: 'Ayer', studies: '1' },
  { id: '3', name: 'Elena Torres', lastOrder: 'Hoy', studies: '2' },
]

/** Mock rows for Resultados view. */
export const MOCKUP_RESULTS = [
  {
    id: '#LAB-092',
    patient: 'María González',
    test: 'Hemograma',
    status: 'Validado',
  },
  {
    id: '#LAB-093',
    patient: 'Carlos Ruiz',
    test: 'TSH, T4',
    status: 'Validado',
  },
  {
    id: '#LAB-094',
    patient: 'Elena Torres',
    test: 'Glucosa',
    status: 'Pendiente',
  },
]
