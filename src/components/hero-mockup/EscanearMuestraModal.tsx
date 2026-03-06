import { useEffect } from 'react'

interface EscanearMuestraModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/**
 * Modal que explica que el usuario puede escanear con la pistola
 * o ingresar códigos manualmente.
 */
export function EscanearMuestraModal({ open, onOpenChange }: EscanearMuestraModalProps) {
  useEffect(() => {
    if (!open) return
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="escanear-muestra-title"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-white rounded-xl border border-gray-100 max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="escanear-muestra-title"
          className="text-lg font-semibold text-gray-900 mb-3 font-[family-name:var(--font-body)]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Escanear muestra
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Utilice el lector de códigos de barras para registrar la muestra de forma
          automática o ingrese el identificador de la muestra manualmente en el
          campo de búsqueda. Ambas opciones mantienen la trazabilidad del proceso.
        </p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-9 px-5 rounded-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
