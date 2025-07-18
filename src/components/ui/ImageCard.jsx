import React from 'react'

const ImageCard = ({imageUrl, description}) => {
  return (
    <div className='bg-amber-300 w-40 h-48 rounded-4xl'>
        <img src={imageUrl} alt={description} />
    </div>
  )
}

export default ImageCard;