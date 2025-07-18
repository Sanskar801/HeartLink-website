
import logo from '../../assets/logo.svg';
import { X, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contact' className='h-[60vh] bg-black text-white flex flex-col justify-between items-center py-10'>

      {/* Logo and Heading */}
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="HeartLink Logo" className="h-16 w-16 mb-2" />
        <h1 className="text-2xl font-bold mb-4">Know More about us</h1>

        {/* Social Icons */}
        <div className="flex gap-6 mb-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <X className="h-7 w-7 hover:text-pink-400 transition-colors" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-7 w-7 hover:text-pink-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7 hover:text-pink-400 transition-colors" />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 mt-auto">
        © Copyright 2025. All rights reserved
      </div>
      
    </footer>
  );
}

export default Footer