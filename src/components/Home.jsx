import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
    return (
        <section id='home'>
        <div className='max-w-[1240px] h-[100vh] mx-auto'>
            <Navbar />
            <Hero />
        </div>
        </section>
    )
}

export default Home
