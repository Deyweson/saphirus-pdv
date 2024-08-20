import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { HashRouter } from 'react-router-dom'
import { MainRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <MainRoutes />
    </HashRouter>
  </React.StrictMode>
)
