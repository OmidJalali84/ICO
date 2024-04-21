import React, { useRef } from 'react'
import './testimonials.css'
import next_btn from '../../next-icon.png'
import back_btn from '../../back-icon.png'
import user_1 from '../../user-1.png'
import user_2 from '../../user-2.png'
import user_3 from '../../user-3.png'
import user_4 from '../../user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx=0;



  const slideforward=()=>{
    if(tx>-50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }

  const slidebackward=()=>{
    if(tx<0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_btn} alt="" onClick={slideforward}/>
      <img className='back-btn' src={back_btn} alt="" onClick={slidebackward}/>
      <div className="slider">
       <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>Name</h3>
                <span>Info</span>
              </div>
            </div>
            <p>Text</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>Name</h3>
                <span>Info</span>
              </div>
            </div>
            <p>Text</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>Name</h3>
                <span>Info</span>
              </div>
            </div>
            <p>Text</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>Name</h3>
                <span>Info</span>
              </div>
            </div>
            <p>Text</p>
          </div>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Testimonials
