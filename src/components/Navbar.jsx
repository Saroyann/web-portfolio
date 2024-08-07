import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ToggleButton from './ToggleButton';

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
        <AiOutlineClose onClick={handleMenu} className="fixed right-3 top-3" size={30} /> : 
        <AiOutlineMenu onClick={handleMenu} className="fixed right-3 top-3" size={30} />
    );

    const navClasses = `w-full fixed top-0 left-0 ${isScrolled ? 'backdrop-blur-sm' : ''}`;
    const menuClasses = `h-full fixed top-0 w-4xl bg-slate-200 p-8 ease-in-out duration-500 ${menu ? 'left-0 text-center' : 'left-[-100vw]'}`;

    return (
        <>
        <div className={navClasses}>
            <div className="flex items-center py-2">
                <h1 className="text-2xl ml-3 mt-2 font-bold text-yellow-500 mr-48">YIIM</h1>
                <MenuIcon isOpen={menu} />
                <ToggleButton />
            </div>
            <ul className={menuClasses}>
                <li className="text-2xl py-3 mt-32"><a href="#home">Home</a></li>
                <li className="text-2xl py-3"><a href="#about">About</a></li>
                <li className="text-2xl py-3"><a href="#skills">Skills</a></li>
                <li className="text-2xl py-3"><a href="#portfolio">Portfolio</a></li>
                <li className="text-2xl py-3"><a href="#Achievements">Certificates</a></li>
            </ul>
        </div>
        </>
    );
};

export default Navbar;
