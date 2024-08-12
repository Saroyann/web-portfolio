import React from 'react'
import { calc, qr, todolist, weather } from '../assets/index.js'
import { useTheme } from '../assets/ThemeContext.jsx'

const Portfolio = () => {

    const { isDarkMode } = useTheme();

    return (
        <section className='h-[100vh] pt-[2rem] md:pt-[4rem]' id='portfolio'>
            <div className={`${!isDarkMode ? '' : 'text-white'}`}>
            <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>Web Portfolio</h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium my-2'>Bunch Of My Web Portfolio :</h2>

            <div className={`pt-3 md:pt-0 overflow-y-scroll md:overflow-y-visible ${window.innerWidth < 768 ? 'h-[570px]' : ''}`}>

                <div className='mx-auto w-fit md:gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-14'>

                    <div>
                        <div className='text-2xl md:text-4xl text-center pb-2 md:pt-7'>Kalkulator</div>
                        <img className='w-[290px] h-[345px] rounded-lg' src={calc} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/simple-calculator">
                            <div className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center mt-3 md:text-2xl p-2 rounded-xl`}>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <div className='text-2xl  md:text-4xl text-center pt-4 pb-2'>ToDo List</div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={todolist} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-todolist">
                            <div className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center mt-3 md:mt-6 md:text-2xl p-2 rounded-xl`}>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <div className='text-2xl  md:text-4xl text-center pt-4 pb-2'>Cuaca</div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={weather} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-weather-app">
                            <div className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center mt-3 md:text-2xl p-2 rounded-xl`}>Source Code</div>
                        </a>
                    </div>

                    <div>
                        <div className='text-2xl text-center  md:text-4xl pt-4 pb-2'>QR Generator</div>
                        <img className='pt-4 w-[290px] h-[345px] rounded-lg' src={qr} />
                        <a className='cursor-pointer' target='_blank' href="https://github.com/Saroyann/javascript-qr-generator">
                            <div className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center mt-3 md:text-2xl p-2 rounded-xl`}>Source Code</div>
                        </a>
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}

export default Portfolio
