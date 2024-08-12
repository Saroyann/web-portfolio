import React from 'react'
import { useTheme } from '../assets/ThemeContext';

const ToggleButton = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();

    return (
        <>
            <div className='flex justify-center cursor-pointer'>
                <p className='pr-2 md:text-2xl md:pr-4'>light</p>
                <div onClick={() => setIsDarkMode(!isDarkMode)} className={!isDarkMode ? 'w-12 md:w-14 h-5 md:h-8 bg-slate-300 rounded-full' : 'w-12 h-5 md:w-14 md:h-8 bg-slate-100 rounded-full'}>
                    <div className={!isDarkMode ? 'w-5 h-5 md:w-8 md:h-8 bg-yellow-300 rounded-full ease-in-out duration-500' : 'w-5 h-5 md:w-8 md:h-8 bg-blue-400 rounded-full translate-x-7 ease-in-out duration-500'}></div>
                </div>
                <p className='pl-2 md:text-2xl md:pl-4'>dark</p>
            </div>
        </>
    )
}

export default ToggleButton
