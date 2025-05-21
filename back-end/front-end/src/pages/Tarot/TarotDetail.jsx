import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TarotDetail.css";

const TarotDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handleStart = () => {
    navigate(`/tarot-reading/${product.id}`, {
      state: {
        product,
      },
    });
  };

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="tarot-detail-container">
      <div className="product-header">
        <h1>{product.title}</h1>
        <div className="price">
          <span>무료⭐</span>
          <p>{new Intl.NumberFormat("ko-KR").format(product.price)}원</p>
        </div>
      </div>

      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="image-placeholder">
            <i className="fas fa-cards"></i>
          </div>
        )}
      </div>

      <div className="product-description">
        <h2>상품 소개</h2>
        <ul className="features">
          {product.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <button className="start-button" onClick={handleStart}>
        시작하기
      </button>
    </div>
  );
};

export default TarotDetail;
