import React from 'react';
import { hero, izumi1, izumi2, scrollDown } from '../assets/index.js'
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { useTheme } from '../assets/ThemeContext.jsx';

const Hero = () => {

    const { isDarkMode } = useTheme();

    return (
        <div className='h-[100vh] mx-auto'>

            <div className={`${window.innerWidth <= 1280 ? 'overflow-hidden' : ''} lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:h-[100vh]`}>
                <div className="pt-20 mx-auto flex flex-col justify-center items-center">
                    <div className='relative flex items-center justify-center w-[480px] md:w-[600px]'>
                        <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:2, ease: 'easeInOut'}}
                            className="absolute bg-yellow-200 w-[370px] h-[370px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"></motion.div>
                        <motion.img
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, type: 'spring', stiffness: 100, damping:5, mass: 1 }}
                            className="absolute left-[50px] w-[170px] md:left-[-70px] md:w-[360px]"
                            src={izumi1}
                            alt="Izumi 1"
                        />
                        <motion.img
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, type: 'spring', stiffness: 100, damping:5, mass: 1 }}
                            className="absolute right-[50px] w-[170px]  md:right-[-70px] md:w-[360px]"
                            src={izumi2}
                            alt="Izumi 2"
                        />
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, type: 'tween' }}
                            className="relative w-[330px] md:w-[700px]"
                            src={hero}
                            alt="Profile"
                        />
                    </div>
                </div>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                className='text-center w-[280px] md:w-[500px] lg:w-[550px] mx-auto mt-3 lg:mt-40'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium'>Hello I'm</h2>
                    <h1 className='text-3xl md:text-5xl font-bold py-2 md:py-5 lg:py-7 lg:text-6xl'>William Saroyan (YIIM)</h1>
                    <div className='flex justify-center md:text-3xl'>
                        <p className='pr-1 lg:pr-3 lg:pb-10'>Seorang </p>
                        <ReactTyped
                            className='font-bold text-yellow-500'
                            strings={['Web Developer', 'Digital Artist', 'Music Producer']}
                            typeSpeed={80}
                            loop
                        />
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}

                        className='w-[70px] md:w-[100px] mt-5 mx-auto' src={scrollDown} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
