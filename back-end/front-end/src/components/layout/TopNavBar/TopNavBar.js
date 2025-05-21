import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TopNavBar.css";

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      path: "/",
      label: "홈",
    },
    { path: "/fortune", label: "사주" },
    { path: "/tarot", label: "타로카드" },
    { path: "/consultation", label: "NEW상담" },
    { path: "/psychology", label: "심리테스트" },
    { path: "/sale", label: "할인상품" },
  ];

  return (
    <nav className="top-nav">
      {/* 사이드 메뉴 */}
      <div className={`nav-menu side-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className="top-nav-content">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/Images/dreamru_logo.png`}
          alt="DreamRu 사주타로"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />

        {/* 햄버거 메뉴 아이콘 */}
        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
