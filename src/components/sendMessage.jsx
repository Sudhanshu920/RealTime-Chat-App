import React from 'react'
import attach from './../../images/attach.png'
import pics from './../../images/img.png'

const SendMessage = () => {
  return (
    <div className='send'>
      <input type="text" placeholder='Message'/>
      <div>
      <img src={attach} alt="" />
      <img src={pics} alt="" />
      <button>Send</button>
      </div>
    </div>
  )
}

export default SendMessage