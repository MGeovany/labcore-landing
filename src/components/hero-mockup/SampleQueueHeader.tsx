interface SampleQueueHeaderProps {
  title: string
  subtitle: string
  actionLabel: string
  onActionClick?: () => void
}

/**
 * Header for the sample queue section. Title uses Poppins (--font-body).
 * If onActionClick is passed, the action opens that callback (e.g. modal); otherwise it links to #product.
 */
export function SampleQueueHeader({
  title,
  subtitle,
  actionLabel,
  onActionClick,
}: SampleQueueHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-xl font-medium text-gray-900 font-body">{title}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
      {onActionClick ? (
        <button
          type="button"
          onClick={onActionClick}
          className="h-9 px-5 rounded-full bg-cyan-500 text-white text-sm font-medium flex items-center justify-center hover:bg-cyan-600 transition-colors shrink-0"
        >
          {actionLabel}
        </button>
      ) : (
        <a
          href="#product"
          className="h-9 px-5 rounded-full bg-cyan-500 text-white text-sm font-medium flex items-center justify-center hover:bg-cyan-600 transition-colors shrink-0"
        >
          {actionLabel}
        </a>
      )}
    </div>
  )
}
