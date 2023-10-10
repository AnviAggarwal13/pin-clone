import React from 'react'

const Card = ({ image }) => {
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl p-2">
            <img src={image.webformatURL} alt="" className='w-full' /> 
        </div>
    </div>
  )
}

export default Card