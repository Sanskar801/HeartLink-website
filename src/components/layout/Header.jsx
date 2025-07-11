import React from 'react'
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className='py-2 px-4 h-20 bg-black flex items-center'>

            <div className='flex items-center gap-2.5'>
                <img src={logo}
                    alt="icon-image"
                    className='w-10 h-10' />
                <span className='text-pink-400 font-bold text-2xl'>HeartLink</span>
            </div>


        </header>
    )
}

export default Header;