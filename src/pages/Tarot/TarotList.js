import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TarotList.css';

const TarotList = () => {
  const navigate = useNavigate();
  // 임시 데이터 (나중에 API로 대체)
  const [products] = useState([
    {
      id: 1,
      title: '연애운 타로',
      description: '당신의 사랑과 연애에 대한 운세를 봐드립니다.',
      price: 30000,
      image: '/images/tarot-love.jpg'
    },
    {
      id: 2,
      title: '직업운 타로',
      description: '진로와 직장에 대한 고민을 해결해드립니다.',
      price: 35000,
      image: '/images/tarot-career.jpg'
    },
    {
      id: 3,
      title: '종합운 타로',
      description: '전반적인 운세와 미래에 대해 상담해드립니다.',
      price: 40000,
      image: '/images/tarot-general.jpg'
    }
  ]);

  const handleProductClick = (product) => {
    navigate(`/tarot/${product.id}`, { state: { product } });
  };

  return (
    <div className="tarot-list-container">
      <h1 className="tarot-title">타로 상담</h1>
      <div className="tarot-products">
        {products.map(product => (
          <div 
            key={product.id} 
            className="tarot-product-card"
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image">
              {product.image ? (
                <img src={product.image} alt={product.title} />
              ) : (
                <div className="image-placeholder">
                  <i className="fas fa-cards"></i>
                </div>
              )}
            </div>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="price">{new Intl.NumberFormat('ko-KR').format(product.price)}원</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotList;
