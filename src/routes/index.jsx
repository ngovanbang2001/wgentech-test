import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../features/main/view'
import { ROUTES_APP } from '../utils/constants'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_APP.home.value}  element={<Home/>} />
    </Routes>
  )
}

export default MainRoutes