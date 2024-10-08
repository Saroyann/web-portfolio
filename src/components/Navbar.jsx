import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ToggleButton from './ToggleButton';
import { motion } from 'framer-motion';
import { homeLight, aboutMeLight, skillsLight, portfolioLight, certificateLight } from '../assets/index.js'
import { homeDark,aboutMeDark,skillsDark,portfolioDark,certificateDark } from '../assets/index.js';
import { useTheme } from '../assets/ThemeContext.jsx';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDarkMode } = useTheme();

    const handleMenu = () => {
        setMenu(prevMenu => !prevMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const MenuIcon = ({ isOpen }) => (
        isOpen ?
            <AiOutlineClose onClick={handleMenu} className="fixed lg:hidden right-3 top-3" size={30} /> :
            <AiOutlineMenu onClick={handleMenu} className="fixed lg:hidden right-3 top-3" size={30} />
    );

    const navClasses = `w-full lg:left-36 fixed top-0 left-0 ${isScrolled ? 'backdrop-blur-sm' : ''} z-50`;
    const menuClasses = `h-full fixed top-0 w-4xl p-8 ease-in-out duration-500 ${menu ? 'left-0 text-center' : 'left-[-100vw]'} z-50 ${!isDarkMode ? 'bg-slate-200' : 'bg-black text-white'}`;

    return (
        <>
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className={`fixed left-5 hidden lg:block w-[5rem]`}>
                <div className={`${!isDarkMode ? 'bg-slate-200' : 'bg-black'} mt-28 p-4 rounded-full`}>
                    <motion.a
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ transition: 2, delay: 1 }}
                        href="#home">
                        <img className='mt-5 hover:scale-75 duration-300' src={!isDarkMode ? homeLight : homeDark} />
                    </motion.a>

                    <motion.a
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ transition: 2, delay: 1.5 }}
                        href="#about">
                        <img className=' my-10 hover:scale-75 duration-300' src={!isDarkMode ?  aboutMeLight : aboutMeDark} />
                    </motion.a>

                    <motion.a
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ transition: 2, delay: 2 }}
                        href="#skills">
                        <img className=' my-10 hover:scale-75 duration-300' src={!isDarkMode ? skillsLight : skillsDark} />
                    </motion.a>

                    <motion.a
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ transition: 2, delay: 2.5 }}
                        href="#portfolio">
                        <img className=' my-10 hover:scale-75 duration-300' src={!isDarkMode ? portfolioLight : portfolioDark} />
                    </motion.a>

                    <motion.a
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ transition: 2, delay: 3 }}
                        href="#Achievements">
                        <img className=' my-10 hover:scale-75 duration-300' src={!isDarkMode ? certificateLight : certificateDark} />
                    </motion.a>
                </div>
            </motion.div>

            <div className={navClasses}>
                <motion.div
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 3.5 }}
                    className="flex lg:justify-between items-center py-2 lg:w-[80rem]">
                    <h1 className={`${!isDarkMode ? 'text-yellow-500' : 'text-blue-400'} text-2xl md:text-4xl ml-3 mt-2 font-bold mr-48 lg:mr-[0px]`}>YIIM</h1>
                    {
                        window.innerWidth < 1280 ?
                            ''
                            :
                            <ToggleButton />
                    }
                    <MenuIcon isOpen={menu} />
                </motion.div>
            </div>
            <ul className={menuClasses}>
                <div className='mt-32 md:mt-72'>
                    <ToggleButton />
                    <li className="text-2xl md:text-4xl py-3 md:py-4"><a href="#home">Home</a></li>
                    <li className="text-2xl md:text-4xl py-3 md:py-4"><a href="#about">About Me</a></li>
                    <li className="text-2xl md:text-4xl py-3 md:py-4"><a href="#skills">Skills</a></li>
                    <li className="text-2xl md:text-4xl py-3 md:py-4"><a href="#portfolio">Portfolio</a></li>
                    <li className="text-2xl md:text-4xl py-3 md:py-4"><a href="#Achievements">Certificates</a></li>
                </div>
            </ul>
        </>
    );
};

export default Navbar;
