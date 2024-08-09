import React from 'react'
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
    <>
    <div className='max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] mx-auto'>
      <Home />
      <About />
    </div>
    </>
  )
}

export default App
