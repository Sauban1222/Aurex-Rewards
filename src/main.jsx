import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app.jsx'
import { RewardsProvider } from './state/RewardsContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RewardsProvider>
        <App />
      </RewardsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)