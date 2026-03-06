import type { MockupNavItem, MockupViewId } from './types'

interface MockupSidebarProps {
  items: MockupNavItem[]
  activeView: MockupViewId
  onSelectView: (view: MockupViewId) => void
}

/** Renders the mock dashboard sidebar; click switches the main content inside the mockup. */
export function MockupSidebar({
  items,
  activeView,
  onSelectView,
}: MockupSidebarProps) {
  return (
    <div className="hidden md:block col-span-2 space-y-4">
      <div className="h-8 w-24 bg-gray-100 rounded mb-8" aria-hidden />
      <nav className="space-y-2" role="navigation" aria-label="Panel de laboratorio">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectView(item.id)}
            className={`block h-8 w-full rounded px-3 text-xs font-medium flex items-center transition-colors text-left w-full ${
              activeView === item.id
                ? 'bg-cyan-50 text-cyan-500'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
