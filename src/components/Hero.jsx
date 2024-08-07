import React from 'react'
import hero from '../assets/profile.png'
import izumi1 from '../assets/konata home.png'
import izumi2 from '../assets/konata home 2.png'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <>
            <div className='-z-0 max-w-[1240px]'>
                <div className="pt-28">
                    <div className='relative mx-auto flex md:flex-col justify-center items-center'>
                        <div className="absolute bg-yellow-200 w-[300px] h-[300px] rounded-full"></div>
                        <img className="absolute left-0 w-[190px]" src={izumi1} />
                        <img className="absolute right-0 w-[190px] scale-x-[-1]" src={izumi2} />
                        <img className="relative w-[290px]" src={hero} alt="Profile" />
                    </div>
                    <div className='text-center w-[280px] mx-auto mt-3'>
                        <h2 className='text-2xl font-medium'>Hello I am</h2>
                        <h1 className='text-3xl font-bold py-2'>William Saroyan (YIIM)</h1>
                        <div className='flex justify-center'>
                            <p className='pr-1'>Seorang </p>
                            <ReactTyped
                            className='font-bold text-yellow-500'
                                strings={
                                    ['Web Developer', 'Digital Artist', 'Music Producer']
                                }
                                typeSpeed={80}
                                loop
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
