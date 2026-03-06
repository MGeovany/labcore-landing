import { type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
}

export default function FadeIn({ children, className = '' }: FadeInProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
