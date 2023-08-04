import React, { useContext, useEffect, useRef, useState } from 'react';
import { chatContext } from '../context/chatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/authContext';

const ChatMessage = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(chatContext);
  const currentUser = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'chats', data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatID]);
  return (
    <div className="message">
      {messages.map((m, index) => (
        <div
          ref={messages.length - 1 === index ? ref : null}
          className={`msg ${m.senderId === currentUser.uid && 'owner'}`}
          key={m.id}
        >
          <div className="msgDetails">
            <img
              src={
                m.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
            />
            <span>just now</span>
          </div>
          <div className="msgContent">
            <span>{m.text}</span>
            {m.img && <img src={m.img} alt="" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
