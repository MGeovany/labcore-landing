import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

const base =
  'inline-flex items-center justify-center font-medium text-[0.95rem] transition-all duration-200 rounded-full'

const variants = {
  primary:
  'bg-[#2b59c3] text-white py-3 px-8 shadow-[0_4px_6px_-1px_rgba(43,89,195,0.2)] hover:bg-[#1e40a0] hover:-translate-y-px hover:shadow-[0_10px_15px_-3px_rgba(43,89,195,0.3)]',
  secondary:
  'bg-white text-[#111827] border border-[#e5e7eb] py-3 px-8 hover:border-[#2b59c3] hover:text-[#2b59c3]',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  as?: 'button'
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants
  as: 'a'
}

export function Button({
  variant = 'primary',
  className = '',
  as,
  children,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `${base} ${variants[variant ?? 'primary']} ${className}`.trim()

  if (as === 'a') {
    const { as: _a, ...anchorProps } = props as LinkProps
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
