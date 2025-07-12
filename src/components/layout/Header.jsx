import React from 'react'
import logo from '../../assets/logo.svg';
import IconButton from '../ui/IconButton';
import { Moon, Languages } from 'lucide-react';
import CtaButton from '../ui/CtaButton';


const navigationItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
    { label: 'Contact Us', href: '#contact' }
];

const Header = () => {
    return (
        <header className='py-2 px-8 h-20 bg-gray-500 flex items-center justify-between'>

            <div className='flex items-center gap-2.5'>
                <img src={logo}
                    alt="icon-image"
                    className='w-10 h-10' />
                <span className='text-pink-400 font-bold text-2xl'>HeartLink</span>
            </div>

            <div>
                <ul className='flex space-x-8'>
                    {navigationItems.map((items) => (
                        <li key={items.label}>
                            <a href={items.href}>
                                {items.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex justify-between gap-4'>
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