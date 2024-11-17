import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContact } from './Contact/AppContact'
import { IndexP } from './LandingPage/IndexP'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <IndexP/> */}
    <AppContact/>
  </StrictMode>,
)
