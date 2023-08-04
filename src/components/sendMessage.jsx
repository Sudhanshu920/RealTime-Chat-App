import React, { useContext, useState } from 'react';
import attach from './../../images/attach.png';
import pics from './../../images/img.png';
import { AuthContext } from '../context/authContext';
import { chatContext } from '../context/chatContext';
import { v4 as uuid } from 'uuid';
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const SendMessage = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const currentUser = useContext(AuthContext);
  const { data } = useContext(chatContext);

  const handleClick = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {
               updateDoc(doc(db, 'chats', data.chatID), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
          });
        }
      );
    } else {
      await updateDoc(doc(db, 'chats', data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    try {
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [data.chatID + '.lastMessage']: {
          text,
        },
        [data.chatID + '.date']: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', data.user.uid), {
        [data.chatID + '.lastMessage']: {
          text,
        },
        [data.chatID + '.date']: serverTimestamp(),
      });

      setText('');
      setImg(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="send">
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <div>
        <img src={attach} alt="" />
        <input
          type="file"
          id="file"
          style={{ display: 'none' }}
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
        />
        <label htmlFor="file">
          <img src={pics} alt="" />
        </label>
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

export default SendMessage;
