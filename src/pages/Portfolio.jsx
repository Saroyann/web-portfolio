import React from 'react'
import {calc,qr,todolist,weather} from '../assets/index.js'

const Portfolio = () => {
    return (
        <section className='h-[100vh] pt-[2rem] md:pt-[4rem] relative' id='portfolio'>
            <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>Web Portfolio</h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium my-2'>Bunch Of My Web Portfolio :</h2>

            <div className='mx-auto w-fit'>
                <div className='pt-5'>
                    <img className='w-[290px] h-[345px] rounded-lg' src={calc} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio
