import { useState } from 'react'
import Navbar from './layout/navbar'
import CanvasBar from './pages/processes/main/canvas/canvasBar'
import AppRoutes from './routes'



function App() {

  return (
    <>
    <div className="h-screen w-screen flex flex-col bg-slate-400">
    <Navbar/>
    <AppRoutes/>
    </div>
    </>
  )
}

export default App
