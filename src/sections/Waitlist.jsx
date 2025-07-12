import React from 'react'
import Coundown from '../components/ui/Coundown'
import CtaButton from '../components/ui/CtaButton'

const Waitlist = () => {
  return (
    <section id='waitlist' className='h-[60vh] flex flex-col justify-center items-center'>

      <h1>Launch Countdown</h1>

      <div>
        <span><time datetime="2026-02-13">Feb 13, 2026</time> - Launch Date</span>
        <Coundown />
      </div>

      <p>From First Swipe to Forever</p>

      <CtaButton buttonText={'Join Waitlist'} />

    </section>
  )
}

export default Waitlist