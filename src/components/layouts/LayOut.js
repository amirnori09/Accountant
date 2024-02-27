import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-10 gap-2">
          <div className="col-span-2">
            <SideBar />
          </div>
          <div className="col-span-10 md:col-span-8 h-screen">
            <Navbar />
            {children}
          </div>
        </div>
  );
};

export default Layout;
