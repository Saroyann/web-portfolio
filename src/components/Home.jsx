import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
    return (
        <section id='home'>
        <div className='h-[100vh]'>
            <Navbar />
            <Hero />
        </div>
        </section>
    )
}

export default Home
