import React from 'react'

const CtaButton = ({buttonText}) => {
  return (
    <button className='bg-pink-600 text-blue-50 py-2 px-3.5 rounded-lg flex min-w-24 w-fit h-fit cursor-pointer text-xl items-center justify-center'>
        {buttonText}
    </button>
  )
}

export default CtaButton