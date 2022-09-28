import React from 'react'
import heroim from './images/heroim.jpg'


function hero() {
  return (
    <div className='hero'>
      <img src={heroim}  className="hero-image" alt=""/>
    </div>
  )
}

export default hero
