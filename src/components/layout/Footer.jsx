import React from 'react'
import CtaButton from '../ui/CtaButton'

const Footer = () => {
  return (
    <footer id='contact' className='h-[60vh] bg-black text-white flex flex-col justify-between items-center'>

      <div className='flex justify-between'>

        <h1>Contact Us</h1>

        <form>

          <input type="email" name="email" id="email" placeholder='Enter your email' />

          <div>
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="tel" name="phone" id="phone" placeholder='Phone' />
          </div>

          <textarea name="message" id="message" rows="5" placeholder='Type in your message'></textarea>

          <div className='flex'>
            <CtaButton buttonText={'Send Message'} />
            <button>heartlink@gmail.com</button>
          </div>

        </form>

        <div className='flex gap-4'>
          <h1>Navigation</h1>
          <h1>Social</h1>
          <h1>Legal</h1>
        </div>

      </div>

      <div>
        © Copyright 2025. All rights reserved
      </div>

    </footer>
  )
}

export default Footer