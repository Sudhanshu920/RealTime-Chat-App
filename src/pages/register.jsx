import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../firebase';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import add from '../../images/addAvatar.png';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const avatar = e.target[3].files[0];

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, avatar);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          alert(error);
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            try {
              await updateProfile(user, {
                displayName,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, 'userChats', user.uid), {});

              navigate('/');
            } catch (error) {
              setError(true);
              console.log(error);
            }
          });
        }
      );
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="formWrapper">
        <h3>CHAT APP</h3>
        <h5>Register</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="display name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="file" id="avatar" style={{ display: 'none' }} />
          <label htmlFor="avatar">
            <img src={add} />
            <span>add an avatar</span>
          </label>
          <button type="submit">Register</button>
        </form>
        {error && <span>Something went wrong!!</span>}
        <p>
          already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
