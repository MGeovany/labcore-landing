import type { SampleQueueRow } from './types'

const variantClasses: Record<SampleQueueRow['statusVariant'], string> = {
  pending: 'bg-blue-100 text-blue-700',
  inprogress: 'bg-amber-100 text-amber-700',
  completed: 'bg-emerald-100 text-emerald-700',
}

interface StatusBadgeProps {
  status: string
  variant: SampleQueueRow['statusVariant']
}

/** Single responsibility: render a status pill. */
export function StatusBadge({ status, variant }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {status}
    </span>
  )
}
