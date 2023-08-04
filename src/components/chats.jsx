import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { chatContext } from '../context/chatContext';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const currentUser = useContext(AuthContext);
  const { dispatch } = useContext(chatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  function handleClick(u) {
    dispatch({ type: 'CHANGE_USER', payload: u });
  }


  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className="recentChat"
              key={chat[0]}
              onClick={() => {
                handleClick(chat[1].userInfo);
              }}
            >
              <div>
                <img src={chat[1].userInfo.photoURL} />
                <div className="userChatInfo">
                  <span>{chat[1].userInfo.displayName}</span>
                  <p>{chat[1].lastMessage?.text}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
