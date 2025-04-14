import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <TopNavBar />
      <main className="layout-content">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Layout;
