import React from 'react'

const Coundown = () => {

    const launchDate = new Date('2026-02-13');

  return (
    <div>
        <p className='text-pink-500 text-2xl font-medium'>{launchDate.toUTCString()} <span className=''> - Launch Date</span></p>
    </div>
  )
}

export default Coundown