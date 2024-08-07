import React from 'react'
import hero from '../assets/profile.png'
import izumi1 from '../assets/konata home.png'
import izumi2 from '../assets/konata home 2.png'
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <div className='-z-0 max-w-[1240px] mx-auto'>
            <div className="pt-28">
                <motion.div
                    className='relative mx-auto flex md:flex-col justify-center items-center'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <motion.div
                        className="absolute bg-yellow-200 w-[300px] h-[300px] rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    ></motion.div>
                    <motion.img
                        className="absolute left-[-100px] w-[190px]"
                        src={izumi1}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 90, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                    />
                    <motion.img
                        className="absolute right-[-100px] w-[190px]"
                        src={izumi2}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: -90, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                    />
                    <motion.img
                        className="relative w-[290px]"
                        src={hero}
                        alt="Profile"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
                    />
                </motion.div>
                <div className='text-center w-[280px] mx-auto mt-3'>
                    <h2 className='text-2xl font-medium'>Hello I am</h2>
                    <h1 className='text-3xl font-bold py-2'>William Saroyan (YIIM)</h1>
                    <div className='flex justify-center'>
                        <p className='pr-1'>Seorang </p>
                        <ReactTyped
                            className='font-bold text-yellow-500'
                            strings={['Web Developer', 'Digital Artist', 'Music Producer']}
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
