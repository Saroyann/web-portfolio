import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'

function App() {


  return (
    <>
    <div className='max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] mx-auto'>
      <Home />
      <About />
      <Skills/>
    </div>
    </>
  )
}

export default App
