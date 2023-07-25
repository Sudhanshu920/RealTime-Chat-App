import React from 'react';
import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

const Home = () => {
  return (
    <div className="container">
      <div className="box">
        <Sidebar/>
        <div className="col2">
          <Chat/>
        </div>
      </div>
    </div>
  );
};

export default Home;
