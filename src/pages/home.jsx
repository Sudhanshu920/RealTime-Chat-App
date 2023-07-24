import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="col1">
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

          <input type="text" placeholder="Find a user" />

          <div className="recentChat">
            <div>
              <img
                src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>User</span>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>User</span>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>User</span>
            </div>
          </div>
        </div>
        <div className="col2"></div>
      </div>
    </div>
  );
};

export default Home;
