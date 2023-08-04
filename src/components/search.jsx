import React, { useContext, useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from './../context/authContext';

const Search = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');
  const currentUser = useContext(AuthContext);

  async function handleSearch() {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError(true);
        return;
      }
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  const handleInput = (e) => {
    setError(false);
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    const combinedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedID));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedID), { messages: [] });

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedID + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedID + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedID + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedID + '.date']: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setUser(null);
    setUserName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find a user"
        onKeyDown={handleInput}
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      {error && <span>No user found!!</span>}
      {user && (
        <div className="recentChat" onClick={handleSelect}>
          <div>
            <img src={user.photoURL} />
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
