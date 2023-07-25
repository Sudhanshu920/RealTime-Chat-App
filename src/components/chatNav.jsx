import React from 'react'
import cam from './../../images/cam.png'
import add from './../../images/add.png'
import more from './../../images/more.png'

const ChatNav = () => {
  return (
    <div className='head'>
      <span>User</span>
      <div className="menu">
        <img src={cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
      </div>
    </div>
  )
}

export default ChatNav