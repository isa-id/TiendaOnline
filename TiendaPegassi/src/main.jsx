import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContact } from './Contact/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContact/>
  </StrictMode>,
)
