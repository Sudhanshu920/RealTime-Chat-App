import React from 'react';
import Navbar from '../components/navbar';
import Search from '../components/search';
import RecentChat from './recentChat';

const Sidebar = () => {
  return (
    <div className="col1">
      <Navbar />
      <Search />
      <RecentChat />
    </div>
  );
};

export default Sidebar;
