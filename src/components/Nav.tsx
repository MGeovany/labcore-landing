import { useState, useEffect } from 'react'
import { FlaskConical } from 'lucide-react'
import { Button } from './ui/Button'

const links = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={
        'fixed w-full z-50 border-b transition-all duration-300 ' +
        (scrolled ? 'bg-white/90 backdrop-blur-md border-gray-100' : 'bg-white/90 backdrop-blur-md border-gray-100')
      }
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <FlaskConical className="w-5 h-5" />
          </div>
          <span className="font-[family-name:var(--font-display)] font-semibold text-xl tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors">
            LabCore
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-blue-600 transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">
            Log in
          </a>
          <Button as="a" href="#" className="!py-2.5 !px-6 text-sm">
            Request a demo
          </Button>
        </div>
      </div>
    </nav>
  )
}
