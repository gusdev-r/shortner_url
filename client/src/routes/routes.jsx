import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/home'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  )
}
