import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../firebase';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div className="heading">
      <span>Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} />
        <span>{currentUser.displayName}</span>
        <button type="submit" onClick={() => signOut(auth)}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
