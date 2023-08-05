import React from 'react'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import wave from '../../img/wave.png'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
        <img src={wave} alt='' style={{width: '100%'}}/>
        <div className="f-content">
            <span>jpkavishka@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Git color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer