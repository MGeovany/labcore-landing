import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { DemoPage } from './pages/Demo'
import { PrivacidadPage } from './pages/Privacidad'
import { TerminosPage } from './pages/Terminos'
import { CentroDeAyudaPage } from './pages/CentroDeAyuda'
import { DemoModalProvider } from './context/DemoModalContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DemoModalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/terminos" element={<TerminosPage />} />
          <Route path="/centro-de-ayuda" element={<CentroDeAyudaPage />} />
        </Routes>
      </DemoModalProvider>
    </BrowserRouter>
  </StrictMode>
)
