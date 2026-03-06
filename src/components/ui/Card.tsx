import { type HTMLAttributes } from 'react'

export function Card({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        'bg-white rounded-[20px] border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] ' +
        'transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  )
}
