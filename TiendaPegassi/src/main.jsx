import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContact } from './Contact/App'
import { IndexP } from './LandingPage/IndexP'
import { AppCatalog } from './Catalog/AppCatalog'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCatalog/>
  </StrictMode>,
)

// Arreglando error de subida de archivos al github