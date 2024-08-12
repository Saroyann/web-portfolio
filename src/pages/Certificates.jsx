import React, { useState } from 'react';
import { web1, web2 } from '../assets/index.js';
import { useTheme } from '../assets/ThemeContext.jsx';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function Animated({ children, animationKey }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls, animationKey])

    return (
        <motion.div
            ref={ref}
            key={animationKey}
            variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 }
            }}
            initial='hidden'
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}

const Certificates = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const { isDarkMode } = useTheme();


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
            {isModalOpen && selectedCertificate && (
                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-md flex items-center justify-center z-50' onClick={handleCloseModal}>
                    <Animated animationKey={selectedCertificate}>
                        <div className='bg-slate-800 p-4 rounded-lg'>
                            <img src={selectedCertificate} alt="Certificate" className='max-w-full max-h-[80vh]' />
                        </div>
                    </Animated>
                </div>
            )}

            <div className={`${!isDarkMode ? '' : 'text-white'}`}>
                <h1 className='mt-3 text-3xl md:text-6xl font-bold py-2 md:py-5 text-center'>Certificates</h1>
                <h2 className='text-center text-2xl md:text-4xl font-medium my-2'>My Current Certificates :</h2>

                <div className='mt-10 md:mt-40 md:grid md:grid-cols-2 gap-5 lg:gap-14 w-fit mx-auto lg:mt-5'>
                    <div className={`${!isDarkMode ? 'bg-slate-100' : 'bg-slate-600'} w-[280px] h-[270px] md:w-[340px] md:h-[400px] rounded-xl shadow-lg flex flex-col items-center justify-between`}>
                        <img className='w-[250px] md:w-[290px] pt-4 md:pt-14' src={web1} alt="Web1" />
                        <div onClick={() => handleCertificateClick(web1)} className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center cursor-pointer rounded-lg p-2 md:p-4 w-28 md:w-40 text-[18px] md:text-3xl mb-5 md:mt-8 md:mb-10`}>see full</div>
                    </div>
                    <div className={`w-[280px] h-[270px] ${window.innerWidth >= 768 ? '' : 'mt-5'} ${!isDarkMode ? 'bg-slate-100' : 'bg-slate-600'}  md:w-[340px] md:h-[400px] rounded-xl shadow-lg flex flex-col items-center justify-between`}>
                        <img className='w-[250px] md:w-[290px] pt-4 md:pt-14' src={web2} alt="Web2" />
                        <div onClick={() => handleCertificateClick(web2)} className={`${!isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'} text-center cursor-pointer rounded-lg p-2 md:p-4 w-28 md:w-40 text-[18px] md:text-3xl mb-5 md:mt-8 md:mb-10`}>see full</div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Certificates;
