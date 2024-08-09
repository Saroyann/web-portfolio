import React, { useState } from 'react';
import vsCode from '../assets/skill-web/vsCode.png'
import html from '../assets/skill-web/html.png'
import css from '../assets/skill-web/css.png'
import js from '../assets/skill-web/javascript.png'
import react from '../assets/skill-web/react.png'
import tailwind from '../assets/skill-web/tailwind.png'
import webdev from '../assets/webdev.png'
import pentab from '../assets/pentab.png'
import music from '../assets/music.png'

import sai from '../assets/skill-digArtist/sai.png'
import huion from '../assets/skill-digArtist/huion.png'
import ibis from '../assets/skill-digArtist/ibis.png'

import fl from '../assets/skill-music/flstudio.png'

const Skills = () => {
    const [visibleSkill, setVisibleSkill] = useState(null);

    const handleWebDeveloperClick = () => {
        setVisibleSkill(prevSkill => prevSkill === 'Web Developer' ? null : 'Web Developer');
    };

    const handleDigitalArtistClick = () => {
        setVisibleSkill(prevSkill => prevSkill === 'Digital Artist' ? null : 'Digital Artist');
    };

    const handleMusicProducerClick = () => {
        setVisibleSkill(prevSkill => prevSkill === 'Music Producer' ? null : 'Music Producer');
    };

    return (
        <section id='skills' className='h-[100vh] pt-[3rem] md:pt-[4rem] relative'>

            <div className={`fixed top-0 left-0 mx-auto w-full h-[100vh] backdrop-blur-lg z-20 ${visibleSkill ? '' : 'hidden'}`}>
                <div className='flex justify-center items-center'>
                    <div className='relative w-[300px] h-[400px] rounded-lg bg-slate-200 mt-[150px] shadow-lg'>
                        <div onClick={() => setVisibleSkill(null)} className='absolute right-[-10px] top-[-25px] text-2xl bg-red-500 p-3 rounded-lg text-white cursor-pointer'>X</div>

                        {visibleSkill === 'Web Developer' && (
                            <div>
                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Deskripsi</h2>
                                <p className='text-justify px-4'>Saya memulai perjalanan saya sebagai web developer sejak 2022. Saya belajar secara otodidak melalui youtube dan web course gratis.</p>
                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Tools & tech stack</h2>
                                <div className='grid grid-cols-3 mx-auto w-[200px]'>
                                    <img className='w-[50px]' src={vsCode} />
                                    <img className='w-[50px]' src={html} />
                                    <img className='w-[50px]' src={css} />
                                    <img className='w-[50px]' src={js} />
                                    <img className='w-[50px]' src={react} />
                                    <img className='w-[50px]' src={tailwind} />

                                </div>
                            </div>
                        )}

                        {visibleSkill === 'Digital Artist' && (
                            <div>
                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Deskripsi</h2>
                                <p className='text-justify px-4'>Menggambar merupakan salah 1 dari hobi saya, saya mulai belajar menggambar digital pada tahun 2020. Saya biasanya menggambar menggunakan pentab ataupun handphone.</p>

                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Tools</h2>

                                <div className='grid grid-cols-3 w-[200px] mx-auto'>
                                    <img className='w-[100px]' src={sai} />
                                    <img className='w-[100px]' src={huion} />
                                    <img className='w-[100px]' src={ibis} />
                                </div>
                            </div>
                        )}

                        {visibleSkill === 'Music Producer' && (
                            <div>
                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Deskripsi</h2>
                                <p className='text-justify px-4'>Saya bukan hanya seseorang yang menikmati produk, tetapi juga seorang pengamat. Terpengaruh oleh musik EDM, saya mulai tertarik untuk membuat musik sendiri dengan gaya melodic sejak tahun 2023.</p>

                                <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Tools</h2>
                                <div className='flex justify-center'>
                                    <img className='w-[50px]' src={fl} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>My Skills</h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium mt-2'>Skills Overview:</h2>

            <div className='md:grid md:grid-cols-2 md:pt-10'>
                <div className='w-[300px] h-[330px] md:w-[340px] md:h-[390px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <img className='w-[12rem] mx-auto pt-3' src={webdev} />
                    </div>
                    <h3 className='text-center text-2xl md:text-4xl py-4'>Web Developer</h3>
                    <div onClick={handleWebDeveloperClick} className='text-center bg-yellow-300 md:text-2xl rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>

                <div className='w-[300px] h-[330px] md:w-[340px] md:h-[390px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <img className='w-[6rem] mx-auto pt-14' src={pentab} alt="" />
                    </div>
                    <h3 className='text-center text-2xl md:text-4xl py-4'>Digital Artist</h3>
                    <div onClick={handleDigitalArtistClick} className='text-center bg-yellow-300 md:text-2xl rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>

                <div className='w-[300px] h-[330px] md:w-[340px] md:h-[390px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl md:col-span-2'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <img className='w-[6rem] mx-auto pt-14' src={music} alt="" />
                    </div>
                    <h3 className='text-center text-2xl md:text-4xl py-4'>Music Producer</h3>
                    <div onClick={handleMusicProducerClick} className='text-center bg-yellow-300 md:text-2xl rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>
            </div>

        </section>
    );
};

export default Skills;
