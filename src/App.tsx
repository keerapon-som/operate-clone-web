import { useState } from 'react'
import Navbar from './layout/navbar'
import CanvasBar from './pages/processes/canvas/canvasBar'
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