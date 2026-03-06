import { FlaskConical } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-blue-600" />
          <span className="font-[family-name:var(--font-display)] font-bold text-gray-900">
            LabCore Healthcare
          </span>
        </div>
        <div className="text-sm text-gray-400">© 2024 LabCore Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
