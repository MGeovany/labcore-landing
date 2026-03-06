/** View id shown in the mockup main area (aligned with poc-lis-dignitas). */
export type MockupViewId = 'panel' | 'ordenes' | 'pacientes' | 'resultados'

/** Nav item for the dashboard mockup sidebar. */
export interface MockupNavItem {
  id: MockupViewId
  label: string
}

/** Row for the sample queue table. */
export interface SampleQueueRow {
  id: string
  patient: string
  test: string
  status: string
  statusVariant: 'pending' | 'inprogress' | 'completed'
  action: string
}
