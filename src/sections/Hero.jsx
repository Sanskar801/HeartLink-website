import React from 'react'
import CtaButton from '../components/ui/CtaButton'
import ImageCard from '../components/ui/ImageCard';
import romanticDate from '../assets/Romantic-Date.webp';

const Hero = () => {
    return (
        <section id='home' className='flex flex-col h-[100vh]'>

            {/* Background Text */}
            {/* <div>
                <p className='font-medium lg:text-[20rem] text-[6rem]'>HeartLink</p>
            </div> */}

            {/* Image cards */}

            <div className='flex gap-4 h-max'>
                <ImageCard imageUrl={romanticDate} description={'Couples on romantic date'} />
                <ImageCard imageUrl={romanticDate} description={'Couples on romantic date'} />
                <ImageCard imageUrl={romanticDate} description={'Couples on romantic date'} />
                <ImageCard imageUrl={romanticDate} description={'Couples on romantic date'} />
            </div>

            <p className='text-center'>From First Swipe to Forever</p>
            <p className='text-center'>This valentine match with your soulmate</p>

            <CtaButton buttonText={'Join The Beta'} />

        </section>
    );
}

export default Hero;