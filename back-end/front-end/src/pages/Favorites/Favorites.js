import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Favorites.css';

const Favorites = () => {
  // 임시 데이터 - 실제로는 상태 관리 라이브러리나 context를 사용하여 관리
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: '2024 운세 풀이',
      category: '사주',
      price: '50,000원',
      icon: 'star'
    },
    {
      id: 2,
      title: '연애 타로 상담',
      category: '타로',
      price: '35,000원',
      icon: 'heart'
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="favorites-container">
      <header className="favorites-header">
        <h1>찜한 상품</h1>
        <p className="favorites-count">
          총 {favorites.length}개의 상품이 있습니다
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <FontAwesomeIcon icon="heart" className="empty-icon" />
          <p>찜한 상품이 없습니다</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <div className="favorite-image">
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </div>
              <div className="favorite-content">
                <h3 className="favorite-title">{item.title}</h3>
                <p className="favorite-category">{item.category}</p>
                <p className="favorite-price">{item.price}</p>
                <div className="favorite-actions">
                  <button className="action-button reserve-button">
                    상담 예약
                  </button>
                  <button 
                    className="action-button remove-button"
                    onClick={() => removeFavorite(item.id)}
                  >
                    찜 해제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
