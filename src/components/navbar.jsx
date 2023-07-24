import React from 'react';

const Navbar = () => {
  return (
    <div className="heading">
      <span>Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>User</span>
        <button type="submit">LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
