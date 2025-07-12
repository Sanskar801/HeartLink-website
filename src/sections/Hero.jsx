import React from 'react'
import CtaButton from '../components/ui/CtaButton'

const Hero = () => {
    return (
        <section className='flex p-4 mx-6 justify-around items-center h-[90vh]'>

            <div>
                <p>From First Swipe to Forever</p>
                <p className='w-[25rem]'>HeartLink seamlessly evolves with your relationship — from discovery and connection to managing life together in one beautiful platform.</p>
                <div className='flex gap-4'>
                    <button>Discover More</button>
                    <CtaButton buttonText={'Join Waitlist'} />
                </div>
            </div>

            <div>
                <div className='bg-pink-300 h-[30rem] w-[20rem]'></div>
            </div>

        </section>
    )
}

export default Hero