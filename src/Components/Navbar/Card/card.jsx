import React from 'react'
import './card.css'
function card({image,heading,detail}) {
  return (
    <div className="card">
        <img src={image} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default card