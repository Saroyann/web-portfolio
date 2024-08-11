import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ToggleButton from './ToggleButton';
import { homeLight, aboutMeLight, skillsLight, portfolioLight, certificateLight } from '../assets/index.js'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
    const menuClasses = `h-full fixed top-0 w-4xl bg-slate-200 p-8 ease-in-out duration-500 ${menu ? 'left-0 text-center' : 'left-[-100vw]'} z-50`;

    return (
        <>

            <div className='fixed left-0 md:hidden lg:block w-[4rem]'>
                <div className='mt-24 bg-slate-200 p-3'>
                    <a href="#home">
                        <img src={homeLight} />
                    </a>

                    <a href="#about">
                        <img className='my-10' src={aboutMeLight} />
                    </a>

                    <a href="#skills">
                        <img className='my-10' src={skillsLight} />
                    </a>

                    <a href="#portfolio">
                        <img className='my-10' src={portfolioLight} />
                    </a>

                    <a href="#Achievements">
                        <img className='my-10' src={certificateLight} />
                    </a>
                </div>
            </div>

            <div className={navClasses}>
                <div className="flex items-center py-2">
                    <h1 className=" text-2xl md:text-4xl ml-3 mt-2 font-bold text-yellow-500 mr-48">YIIM</h1>
                    <MenuIcon isOpen={menu} />
                </div>
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
