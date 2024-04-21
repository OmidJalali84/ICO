import './campus.css'
import React from 'react'
import Gallery_1 from '../../gallery-1.png'
import Gallery_2 from '../../gallery-2.png'
import Gallery_3 from '../../gallery-3.png'
import Gallery_4 from '../../gallery-4.png'
import white_arrow from '../../white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={Gallery_1} alt="" />
        <img src={Gallery_2} alt="" />
        <img src={Gallery_3} alt="" />
        <img src={Gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
