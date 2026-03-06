import type { ReactNode } from 'react'

interface MockupPageLayoutProps {
  title: string
  subtitle: string
  actionLabel?: string
  children: ReactNode
}

/** Layout for a mockup "page": title (Poppins), subtitle, optional CTA, content. */
export function MockupPageLayout({
  title,
  subtitle,
  actionLabel,
  children,
}: MockupPageLayoutProps) {
  return (
    <div className="col-span-12 md:col-span-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-medium text-gray-900 font-[family-name:var(--font-body)]">
            {title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        </div>
        {actionLabel && (
          <a
            href="#product"
            className="h-9 px-5 rounded-full bg-cyan-500 text-white text-sm font-medium flex items-center justify-center hover:bg-cyan-600 transition-colors shrink-0"
          >
            {actionLabel}
          </a>
        )}
      </div>
      {children}
    </div>
  )
}
