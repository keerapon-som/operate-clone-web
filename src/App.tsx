import { useState } from 'react'
import Navbar from './layout/navbar'
import CanvasBar from './pages/processes/canvanBar/canvasBar'
import AppRoutes from './routes'

function App() {

  return (
    <>
    <Navbar/>
    <AppRoutes/>
    </>
  )
}

export default App
