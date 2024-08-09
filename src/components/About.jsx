import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import about1 from '../assets/about.jpeg';
import about2 from '../assets/about 2.jpeg';
import about3 from '../assets/about 3.jpeg';
import about4 from '../assets/about 4.jpeg';
import about5 from '../assets/about 5.jpeg';
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
        <section className='h-[100vh] pt-[3rem] md:pt-[5rem]' id='about'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-6xl font-bold py-2 md:py-5'>About Me</h1>
            </div>

            <div>
                <div className='relative py-5 overflow-hidden w-[100%] flex items-center justify-center'>
                    <button
                        className='absolute left-0 z-10 text-3xl md:text-5xl p-2'
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
                        className='w-[100%] h-[280px] md:h-[600px] flex-shrink-0'
                    >
                        <img
                            className='w-[260px] md:w-[500px] mx-auto rounded-lg'
                            src={photos[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                        />
                    </motion.div>

                    <button
                        className='absolute right-0 z-10 text-3xl md:text-5xl p-2'
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>

                <div className='w-[300px] md:w-[500px] text-center mx-auto'>
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

                    <div className='flex justify-around my-2'>
                        {window.innerWidth < 768
                            ?
                            <FaGithub size={40} />

                            :

                            <FaGithub size={60} />
                        }

                        {window.innerWidth < 768
                            ?

                            <FaCodepen size={40} />

                            :

                            <FaCodepen size={60} />
                        }

                        

                        <FaLinkedin />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
