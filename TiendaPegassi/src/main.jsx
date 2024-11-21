import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContact } from './Contact/App'
import { IndexP } from './LandingPage/IndexP'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexP/>
  </StrictMode>,
)

// Arreglando error de subida de archivos al github