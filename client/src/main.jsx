import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesMainApp from './infra/routes/routes'
import GlobalStyled from './presentation/styles/globalstyle'
import ToastConfig from './presentation/components/toast/toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/*" element={<RoutesMainApp />} />
      </Routes>
      <ToastConfig />
    </BrowserRouter>
  </React.StrictMode>,
)
