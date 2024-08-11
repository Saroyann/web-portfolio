import React, { useState } from 'react';
import { web1, web2 } from '../assets/index.js';

const Certificates = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <section className='h-[100vh] pt-[2rem] md:pt-[4rem]' id='Achievements'>
            {isModalOpen && (
                <div onClick={handleCloseModal} className='top-0 h-[100vh] w-full backdrop-blur-md fixed'>
                    <div className='mt-[15rem] md:mt-[20rem]'>
                        <img src={selectedCertificate} alt="Certificate" />
                    </div>
                </div>
            )}

            <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>Certificates</h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium my-2'>My Current Certificates :</h2>

            <div className='mt-10 md:mt-40 grid grid-cols-2 gap-5 w-fit mx-auto'>
                <div className='w-[280px] h-[270px] md:w-[340px] md:h-[400px] rounded-xl bg-slate-100 shadow-lg flex flex-col items-center justify-between'>
                    <img className='w-[250px] md:w-[290px] pt-4 md:pt-14' src={web1} alt="Web1" />
                    <div onClick={() => handleCertificateClick(web1)} className='text-center cursor-pointer rounded-lg p-2 md:p-4 w-28 md:w-40 text-[18px] md:text-3xl mt-5 md:mt-8 bg-yellow-400 md:mb-10'>see full</div>
                </div>
                <div className='w-[280px] h-[270px] md:w-[340px] md:h-[400px] rounded-xl bg-slate-100 shadow-lg flex flex-col items-center justify-between'>
                    <img className='w-[250px] md:w-[290px] pt-4 md:pt-14' src={web2} alt="Web2" />
                    <div onClick={() => handleCertificateClick(web2)} className='text-center cursor-pointer rounded-lg p-2 md:p-4 w-28 md:w-40 text-[18px] md:text-3xl mt-5 md:mt-8 bg-yellow-400 md:mb-10'>see full</div>
                </div>
            </div>

        </section>
    );
};

export default Certificates;
