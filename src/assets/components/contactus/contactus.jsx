import React from 'react'
import './contactus.css'
import msg_ic from '../../msg-icon.png'
import emic from '../../mail-icon.png'
import numbic from '../../phone-icon.png'
import locicon from '../../location-icon.png'
import whitearrw from '../../white-arrow.png'

const Contactus = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Send us a msg <img src={msg_ic} alt="" /> </h3>
      <p>explain</p>
      <ul>
        <li><img src={emic} alt="" />email </li>
        <li><img src={numbic} alt="" />phone number </li>
        <li><img src={locicon} alt="" />Adress </li>
      </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter ur name' required/>
          <label >Phone number</label>
          <input type="tel" name='phone' placeholder='Enter ur phone number' required/>
          <label> write ur msg here</label>
          <textarea name="msg" rows="6" placeholder='write your msg...'></textarea>
          <button type='submit' className='btn dark-btn'>submit now <img src={whitearrw} alt="" /></button>
        </form>
        </div>
    </div>
  )
}

export default Contactus
