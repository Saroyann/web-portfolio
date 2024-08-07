import React, { useState } from 'react'

const ToggleButton = () => {
    const [click, setClick] = useState(false);

    const clickHandler = () => setClick(c => !c)
    return (
        <div className='flex justify-center'>
            <div onClick={clickHandler} className={!click ? 'w-12 h-5 bg-slate-200 rounded-full' : 'w-12 h-5 bg-white rounded-full'}>
                <div className={!click ? 'w-5 h-5 bg-yellow-300 rounded-full ease-in-out duration-500' : 'w-5 h-5 bg-blue-400 rounded-full translate-x-7 ease-in-out duration-500'}></div>
            </div>
        </div>
    )
}

export default ToggleButton
