import React, { useState } from 'react'

const Skills = () => {
    const [visibleSkill, setVisibleSkill] = useState(null);

    const clickHandle = (skill) => {
        setVisibleSkill(prevSkill => prevSkill === skill ? null : skill);
    }

    return (
        <section id='skills' className='h-[100vh] pt-[3rem] md:pt-[5rem] relative'>

            <div className={`fixed top-0 left-0 mx-auto w-full h-[100vh] backdrop-blur-lg z-20 ${visibleSkill ? '' : 'hidden'}`}>
                <div className='flex justify-center items-center'>
                    <div className='relative w-[300px] h-[400px] rounded-lg bg-slate-200 mt-[150px] shadow-lg'>
                        <div onClick={() => setVisibleSkill(null)} className='absolute right-[-10px] top-[-25px] text-2xl bg-red-500 p-3 rounded-lg text-white'>X</div>
                        <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Deskripsi</h2>
                        <p className='text-justify px-4'>Saya mulai belajar web sejak 2022, saya belajar secara otodidak melalui youtube dan web course gratis.</p>

                        <h2 className='text-center my-3 font-medium text-2xl w-full text-yellow-500'>Tools and Tech Stack</h2>

                        <div className='w-[240px] h-[200px] mx-auto'>
                            {/* Konten skill bisa ditempatkan di sini sesuai skill yang dipilih */}
                            <p className='text-center'>{visibleSkill}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='mt-3 text-3xl text-center font-bold'>My Skills</h1>
            <h2 className='text-center text-2xl font-medium mt-2'>bunch of my skills:</h2>

            <div>
                <div className='w-[300px] h-[330px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <div className='img-1 rounded-t-xl w-[full] h-[200px] bg-cover'></div>
                    </div>
                    <h3 className='text-center text-2xl py-4'>Web Developer</h3>
                    <div onClick={() => clickHandle('Web Developer')} className='text-center bg-yellow-300 rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>

                <div className='w-[300px] h-[330px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <div className='img-1 rounded-t-xl w-[full] h-[200px] bg-cover'></div>
                    </div>
                    <h3 className='text-center text-2xl py-4'>Digital Artist</h3>
                    <div onClick={() => clickHandle('Digital Artist')} className='text-center bg-yellow-300 rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>

                <div className='w-[300px] h-[330px] bg-slate-100 shadow-lg mx-auto my-6 rounded-xl'>
                    <div className='w-full h-[200px] rounded-t-xl'>
                        <div className='img-1 rounded-t-xl w-[full] h-[200px] bg-cover'></div>
                    </div>
                    <h3 className='text-center text-2xl py-4'>Music Producer</h3>
                    <div onClick={() => clickHandle('Music Producer')} className='text-center bg-yellow-300 rounded-lg w-fit mx-auto p-3 cursor-pointer shadow-md'>See Skills</div>
                </div>
            </div>

        </section>
    )
}

export default Skills
