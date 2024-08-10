import React from 'react'
import { calc, qr, todolist, weather } from '../assets/index.js'
import { FaGithub } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <section className='h-[100vh] pt-[2rem] md:pt-[4rem] relative' id='portfolio'>
            <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>Web Portfolio</h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium my-2'>Bunch Of My Web Portfolio :</h2>

            <div className='mx-auto w-fit'>

                <div className={`pt-3 overflow-y-scroll ${window.innerWidth < 768 ? 'h-[570px]' : ''}`}>
                    <div>
                        <img className='w-[290px] h-[345px] rounded-lg' src={calc} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/simple-calculator">
                            <div className='text-center mt-3 bg-yellow-400 p-2 rounded-xl'>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={todolist} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-todolist">
                            <div className='text-center mt-3 bg-yellow-400 p-2 rounded-xl'>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={weather} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-weather-app">
                            <div className='text-center mt-3 bg-yellow-400 p-2 rounded-xl'>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={qr} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-qr-generator">
                            <div className='text-center mt-3 bg-yellow-400 p-2 rounded-xl'>Source Code</div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio
