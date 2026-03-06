const stats = [
  { value: '2.5hrs', label: 'Saved daily per tech' },
  { value: '100%', label: 'Traceability' },
  { value: '0', label: 'Lost specimens' },
  { value: '15m', label: 'Setup time' },
]

export function StatsBar() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          What labs achieve on Day 1
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-[family-name:var(--font-display)] text-gray-900 mb-1">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
