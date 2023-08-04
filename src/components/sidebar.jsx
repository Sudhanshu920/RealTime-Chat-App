import React from 'react';
import Navbar from '../components/navbar';
import Search from '../components/search';
import Chats from './chats';

const Sidebar = () => {
  return (
    <div className="col1">
      <Navbar />
      <Search />
      <Chats/>
    </div>
  );
};

export default Sidebar;
