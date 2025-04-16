import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar = () => {
  const navItems = [
    { path: "/", label: "홈" },
    { path: "/fortune", label: "사주" },
    { path: "/tarot", label: "타로카드" },
    { path: "/consultation", label: "NEW상담" },
    { path: "/psychology", label: "심리테스트" },
    { path: "/sale", label: "할인상품" },
  ];

  return (
    <nav className="top-nav">
      <div className="top-nav-content">
        <div className="nav-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
