import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMoon, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "사주", icon: faStar, path: "/fortune", color: "#FFD700" },
    { id: 2, name: "타로", icon: faMoon, path: "/tarot", color: "#9C27B0" },
    {
      id: 3,
      name: "연애상담",
      icon: faHeart,
      path: "/consultation",
      color: "#E91E63",
    },
    {
      id: 4,
      name: "심리 테스트",
      icon: faUser,
      path: "/psychology",
      color: "#2196F3",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: '운명의 사주 상담',
      price: '30,000원',
      image: 'path-to-image',
      category: '사주'
    },
    {
      id: 2,
      title: '타로 마스터 상담',
      price: '25,000원',
      image: 'path-to-image',
      category: '타로'
    }
    // 더 많은 상품 추가 가능
  ];

  return (
    <div className="home-container">
      <section className="banner-section">
        <h1>당신의 운명을 찾아보세요</h1>
      </section>

      <section className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(category.path)}
            style={{ backgroundColor: `${category.color}15` }}
          >
            <FontAwesomeIcon 
              icon={category.icon} 
              className="category-icon" 
              style={{ color: category.color }}
            />
            <h3>{category.name}</h3>
          </div>
        ))}
      </section>

      <section className="featured-section">
        <h2 className="section-title">인기 상품</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="category-card">
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
