import logo from '../../assets/logo.svg';

// const navigationItems = [
//     { label: 'How It Works', href: '#how-it-works' },
//     { label: 'For Singles', href: '#singles' },
//     { label: 'For Couples', href: '#couples' },
//     { label: 'Pricing', href: '#pricing' },
//     { label: 'Testimonials', href: '#testimonials' },
//     { label: 'Contact Us', href: '#contact' }
// ];

const Header = () => {
    return (
        <header className='py-2 px-8 h-20 flex items-center gap-2'>

            <img src={logo}
                alt="icon-image"
                className='w-10 h-10' />
            <span className='text-pink-400 font-bold text-2xl'>HeartLink</span>

        </header>
    );
}

export default Header;