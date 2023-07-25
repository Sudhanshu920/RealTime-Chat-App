import React from 'react';

const ChatMessage = () => {
  return (
    <div className="messages">
      <div className="msg">
        <div className="msgDetails">
          <img
            src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="msgContent">
          <span>hello user</span>
          {/* <img
            src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          /> */}
        </div>
      </div>
      <div className="msg">
        <div className="msgDetails">
          <img
            src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="msgContent">
          <span>how are you doing today?</span>
        </div>
      </div>
      <div className="msg">
        <div className="msgDetails">
          <img
            src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="msgContent">
          <span>
            i am so happy to inform you that you are selected for the role of
            full stack developer
          </span>
        </div>
      </div>
      <div className="msg">
        <div className="msgDetails">
          <img
            src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="msgContent">
          <span>
            thank you. i am very happy to hear thatthank you. i am very happy to
            hear that thank you. i am very happy to hear thatthank you. i am
            very happy to hear that thank you. i am very happy to hear thatthank
            you. i am very happy to hear that thank you. i am very happy to hear
            that
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
