import { type ReactNode } from 'react'
import { motion } from 'motion/react'

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
    <div className="inline-flex rounded-full bg-[#f3f4f6] p-1 relative">
      {items.map((item) => (
        <motion.button
          key={item.id}
          type="button"
          onClick={() => onChange(item.id as T)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={
            'relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ' +
            (value === item.id
              ? 'text-cyan-500'
              : 'text-[#6b7280] hover:text-[#111827]')
          }
        >
          {item.label}
        </motion.button>
      ))}
      <motion.span
        layoutId="pricing-toggle-pill"
        className="absolute z-0 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
        initial={false}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          top: 2,
          bottom: 2,
          left: value === items[0].id ? 2 : 'calc(50% + 1px)',
          right: value === items[0].id ? 'calc(50% + 1px)' : 2,
        }}
      />
    </div>
  )
}
