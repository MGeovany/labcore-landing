import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { DemoModal } from '../components/DemoModal'

type DemoModalContextValue = {
  openDemoModal: () => void
  closeDemoModal: () => void
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null)

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openDemoModal = useCallback(() => setOpen(true), [])
  const closeDemoModal = useCallback(() => setOpen(false), [])

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}
      <DemoModal isOpen={open} onClose={closeDemoModal} />
    </DemoModalContext.Provider>
  )
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext)
  if (!ctx) throw new Error('useDemoModal must be used within DemoModalProvider')
  return ctx
}
