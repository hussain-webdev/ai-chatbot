import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className='text-white flex bg-[#232323] min-h-screen'>
      <Analytics />
      <div className='hidden sm:block'><Sidebar /></div>
      <div className='max-h-screen overflow-y-auto w-full'><Main /></div>
    </div>
  )
}

export default App
