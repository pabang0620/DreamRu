import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TarotDetail.css';

const TarotDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};


  const handleStart = () => {
    navigate(`/tarot-reading/${product.id}`, {
      state: { 
        product
      }
    });
  };



  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="tarot-detail-container">
      <div className="product-header">
        <h1>{product.title}</h1>
        <p className="price">{new Intl.NumberFormat('ko-KR').format(product.price)}원</p>
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
        <h2>상품 설명</h2>
        <p>{product.description}</p>
        <ul className="features">
          <li>전문 타로마스터의 정확한 해석</li>
          <li>고민 해결을 위한 맞춤형 상담</li>
          <li>비밀보장 원칙 준수</li>
        </ul>
      </div>

      <button className="start-button" onClick={handleStart}>
        시작하기
      </button>
    </div>
  );
};

export default TarotDetail;
