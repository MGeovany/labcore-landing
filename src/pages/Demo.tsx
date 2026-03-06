import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

/**
 * Calendly "Request a demo": set in .env
 *   VITE_CALENDLY_DEMO_URL=https://calendly.com/tu-usuario/demo
 * No API key needed — only the Calendly event/scheduling URL.
 */
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_DEMO_URL ?? ''

export function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <img
              src="/images/logo-black.png"
              alt="LabCore"
              className="h-6 w-auto"
              width={24}
              height={24}
            />
            LabCore
          </Link>
          <Link to="/">
            <Button className="!py-2 !px-4 text-sm">Volver al inicio</Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-[family-name:var(--font-display)] font-bold text-gray-900 md:text-3xl">
          Solicitar demo
        </h1>
        <p className="mt-2 text-gray-600">
          Elige un horario y te contactaremos para mostrarte LabCore.
        </p>

        {CALENDLY_URL ? (
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <iframe
              title="Calendly - Solicitar demo"
              src={CALENDLY_URL}
              className="h-[700px] w-full min-h-[600px] border-0"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 text-center">
            <p className="text-gray-600">
              Para activar la agenda de demos, configura la variable de entorno{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
                VITE_CALENDLY_DEMO_URL
              </code>{' '}
              con tu enlace de Calendly (ej.{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
                https://calendly.com/tu-usuario/demo
              </code>
              ).
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Mientras tanto, puedes solicitar una demo por correo:
            </p>
            <a
              href="mailto:marlon.castro@thefndrs.com?subject=Solicitud de demo - LabCore"
              className="mt-4 inline-block"
            >
              <Button className="!py-3 !px-6">
                Contactar para agendar demo
              </Button>
            </a>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-500">
          <Link to="/" className="text-cyan-500 hover:text-cyan-600 underline">
            Volver al inicio
          </Link>
          {' · '}
          <a
            href="mailto:marlon.castro@thefndrs.com"
            className="text-cyan-500 hover:text-cyan-600 underline"
          >
            marlon.castro@thefndrs.com
          </a>
        </p>
      </main>
    </div>
  )
}
