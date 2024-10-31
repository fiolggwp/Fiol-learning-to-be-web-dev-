import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Index.jsx'
// import Test from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
    {/* <Test></Test> */}
  </StrictMode>,
)
