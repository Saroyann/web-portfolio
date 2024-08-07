import React from 'react';
import {hero,izumi1,izumi2,scrollDown} from '../assets/index.js'
import {ReactTyped} from 'react-typed';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='-z-0 max-w-[380px] md:max-w-[768px] h-[100%] mx-auto'>
            <div className='overflow-hidden md:flex md:flex-col md:items-center'>
            <div className="pt-20 mx-auto flex flex-col justify-center items-center">
                <div className='relative flex items-center justify-center w-[480px] md:w-[600px]'>
                <div className="absolute bg-yellow-200 w-[370px] h-[370px] md:w-[500px] md:h-[500px] rounded-full"></div>
                <img
                    className="absolute left-[50px] w-[170px] md:left-[-70px] md:w-[360px]"
                    src={izumi1}
                    alt="Izumi 1"
                />
                <img
                    className="absolute right-[50px] w-[170px]  md:right-[-70px] md:w-[360px]"
                    src={izumi2}
                    alt="Izumi 2"
                />
                <img
                    className="relative w-[330px] md:w-[700px]"
                    src={hero}
                    alt="Profile"
                />
                </div>
            </div>
            <div className='text-center w-[280px] md:w-[500px] mx-auto mt-3'>
                <h2 className='text-2xl md:text-3xl font-medium'>Hello I'm</h2>
                <h1 className='text-3xl md:text-5xl font-bold py-2 md:py-5'>William Saroyan (YIIM)</h1>
                <div className='flex justify-center md:text-3xl'>
                    <p className='pr-1'>Seorang </p>
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
                    repeatType: "loop" }}
                
                className='w-[70px] md:w-[100px] mt-5 mx-auto' src={scrollDown} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Hero;
