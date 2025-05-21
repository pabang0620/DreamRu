import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomNavBar.css';

const BottomNavBar = () => {
  const navItems = [
    { path: '/', label: '홈', icon: 'home' },
    { path: '/category', label: '카테고리', icon: 'th-large' },
    { path: '/favorites', label: '찜', icon: 'heart' },
    { path: '/search', label: '검색', icon: 'search' },
    { path: '/profile', label: '내정보', icon: 'user' },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-content">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} className="bottom-nav-icon" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
