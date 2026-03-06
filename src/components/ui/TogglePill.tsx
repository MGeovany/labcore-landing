import { type ReactNode } from 'react'

type Item = { id: string; label: ReactNode }

export function TogglePill<T extends string>({
  value,
  onChange,
  items,
}: {
  value: T
  onChange: (v: T) => void
  items: Item[]
}) {
  return (
    <div className="inline-flex rounded-full bg-[#f3f4f6] p-1">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onChange(item.id as T)}
          className={
            'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ' +
            (value === item.id
              ? 'bg-white text-[#2b59c3] shadow-[0_2px_4px_rgba(0,0,0,0.05)]'
              : 'text-[#6b7280] hover:text-[#111827]')
          }
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
