interface SampleQueueHeaderProps {
  title: string
  subtitle: string
  actionLabel: string
}

/**
 * Header for the sample queue section. Title uses Poppins (--font-body).
 * Action button is the primary CTA (e.g. "Escanear muestra" as in poc-lis-dignitas).
 */
export function SampleQueueHeader({
  title,
  subtitle,
  actionLabel,
}: SampleQueueHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-xl font-medium text-gray-900 font-[family-name:var(--font-body)]">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
      <a
        href="#product"
        className="h-9 px-5 rounded-full bg-cyan-500 text-white text-sm font-medium flex items-center justify-center hover:bg-cyan-600 transition-colors shrink-0"
      >
        {actionLabel}
      </a>
    </div>
  )
}
