import React, { useContext } from 'react';
import cam from './../../images/cam.png';
import add from './../../images/add.png';
import more from './../../images/more.png';
import { chatContext } from '../context/chatContext';

const ChatNav = () => {
  const { data } = useContext(chatContext);
  return (
    <div className="head">
      <span>{data.user.displayName}</span>
      <div className="menu">
        <img src={cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
      </div>
    </div>
  );
};

export default ChatNav;
