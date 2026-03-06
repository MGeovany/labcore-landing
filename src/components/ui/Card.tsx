import { type HTMLAttributes } from 'react'

export function Card({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        'bg-white rounded-[20px] border border-black/[0.04] ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  )
}
