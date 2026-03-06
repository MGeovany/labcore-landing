export function AmbientGlow() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(43, 89, 195, 0.08) 0%, rgba(255,255,255,0) 60%)',
      }}
      aria-hidden
    />
  )
}
