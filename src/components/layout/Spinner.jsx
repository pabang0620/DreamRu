// components/Spinner.jsx
import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="mystic-spinner">
        <div className="star" />
        <div className="ring" />
      </div>
      <p className="spinner-message">테스트 결과를 해석하는 중입니다...</p>
    </div>
  );
}
