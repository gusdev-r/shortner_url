import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShortnerHome from '../../presentation/pages/shortner/shortner'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<ShortnerHome />}></Route>
      </Route>
    </Routes>
  )
}
