import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { motion} from 'framer-motion';
import {about1,about2,about3,about4,about5} from '../assets/index.js'
import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const photos = [
    about1,
    about2,
    about3,
    about4,
    about5
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className='h-[100vh] pt-[3rem] mb-[4rem] md:pt-[5rem] lg:pt-[3rem]' id='about'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-6xl font-bold py-2 md:py-5'>About Me</h1>
            </div>

            <div className='mx-auto lg:flex lg:items-center lg:justify-between lg:w-[1000px]'>
                <div className='relative py-5 overflow-hidden lg:overflow-visible w-[100%] flex items-center justify-center'>
                    <button
                        className='absolute left-0 lg:left-[-50px] z-10 text-3xl md:text-5xl p-2'
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='w-[100%] h-[280px] md:h-[500px] flex-shrink-0'
                    >
                        <img
                            className='w-[260px] md:w-[500px] mx-auto rounded-lg'
                            src={photos[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                        />
                    </motion.div>

                    <button
                        className='absolute right-0 lg:right-[-50px] z-10 text-3xl md:text-5xl p-2'
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>

                <div className='w-[300px] md:w-[500px] lg:w-[1000px] lg:ml-[5rem] text-center mx-auto md:mt-9'>
                    <h2 className='text-2xl md:text-4xl md:mb-2 font-medium'>An Ordinary</h2>
                    <ReactTyped
                        className='font-bold text-yellow-500 md:text-3xl'
                        strings={['Web Developer', 'Digital Artist', 'Music Producer']}
                        typeSpeed={80}
                        loop
                    />

                    <p className='pt-3 text-justify md:text-2xl'>
                        Saya adalah seorang Web Developer (Frontend) yang saat ini sedang menempuh pendidikan di STMIK Wicida, jurusan Teknik Informatika. Selain pengembangan web, saya juga memiliki minat yang besar di bidang desain grafis sebagai Digital Artist dan di bidang musik sebagai Music Producer.
                    </p>

                    <h2 className='text-2xl md:text-4xl my-3 md:my-5 font-medium'>Find Me On :</h2>
                    <div className='flex justify-around pb-5'>
                        {(() => {
                            const iconSize = window.innerWidth < 768 ? 40 : 60;
                            return (
                                <>
                                    <a href="https://github.com/Saroyann" target='_blank'><FaGithub size={iconSize} /></a>
                                    <a href='https://codepen.io/Saroyann' target='_blank'><FaCodepen size={iconSize} /></a>
                                    <a href='https://www.linkedin.com/in/william-saroyan-46678327b/' target='_blank'><FaLinkedin size={iconSize} /></a>
                                    <a href='https://www.instagram.com/saroyan_yan030/' target='_blank'><FaInstagram size={iconSize} /></a>
                                    <a href='https://web.facebook.com/profile.php?id=100068010153458' target='_blank'><FaFacebook size={iconSize} /></a>
                                </>
                            );
                        })()}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
