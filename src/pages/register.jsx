import React from 'react';
import add from '../../images/addAvatar.png';

const Register = () => {
  return (
    <div className="container">
      <div className="formWrapper">
        <h3>CHAT APP</h3>
        <h5>Register</h5>
        <form>
          <input type="text" name="name" placeholder="display name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="file" id="avatar" style={{display:'none'}}/>
          <label htmlFor="avatar">
            <img src={add} />
            <span>add an avatar</span>
          </label>
          <button type="submit">Register</button>
        </form>
        <p>already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
