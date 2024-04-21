import React from 'react'
import './abt.css'
import abtimg from '../../about.png'
import playicon from '../../play-icon.png'

const Abt = () => {
  return (
    <div className='abt'>
      <div className="abt-left">
        <img src={abtimg} className='abtimg'/>
        <img src={playicon} className='playicon'/>
      </div>
      <div className="abt-right">
        <h3>about</h3>
        <h2>description</h2>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
    </div>
  )
}

export default Abt
