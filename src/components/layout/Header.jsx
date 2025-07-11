import React from 'react'
import logo from '../../assets/logo.svg';
import IconButton from '../ui/IconButton';
import { Moon, Languages } from 'lucide-react';
import CtaButton from '../ui/CtaButton';

const Header = () => {
    return (
        <header className='py-2 px-4 h-20 bg-gray-500 flex items-center'>

            <div className='flex items-center gap-2.5'>
                <img src={logo}
                    alt="icon-image"
                    className='w-10 h-10' />
                <span className='text-pink-400 font-bold text-2xl'>HeartLink</span>
            </div>

            <div>
                <IconButton icon={<Moon />} />
                <IconButton icon={<Languages />} />

                {/* This button will only be rendered after scrolling on hero section */}
                <CtaButton buttonText={'Join WaitList'} />

            </div>

            {/* Mobile and Tab menu */}

        </header>
    )
}

export default Header;