import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tarot.css';

const Tarot = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'love', name: '연애' },
    { id: 'career', name: '직업' },
    { id: 'fortune', name: '운세' },
    { id: 'relationship', name: '인간관계' }
  ];

  const tarotServices = [
    {
      id: 1,
      title: '연애 타로 상담',
      description: '연인과의 관계, 미래의 인연에 대해 타로로 상담해드립니다.',
      price: '35,000원',
      category: 'love',
      duration: '30분',
      icon: 'heart'
    },
    {
      id: 2,
      title: '직업 타로 상담',
      description: '진로, 직장, 이직에 대해 타로로 상담해드립니다.',
      price: '35,000원',
      category: 'career',
      duration: '30분',
      icon: 'briefcase'
    },
    {
      id: 3,
      title: '운세 타로 상담',
      description: '전반적인 운세와 미래에 대해 타로로 상담해드립니다.',
      price: '40,000원',
      category: 'fortune',
      duration: '40분',
      icon: 'star'
    },
    {
      id: 4,
      title: '인간관계 타로 상담',
      description: '대인관계, 가족관계에 대해 타로로 상담해드립니다.',
      price: '35,000원',
      category: 'relationship',
      duration: '30분',
      icon: 'users'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? tarotServices
    : tarotServices.filter(service => service.category === activeCategory);

  return (
    <div className="tarot-container">
      <header className="tarot-header">
        <h1>타로 상담</h1>
        <p className="tarot-description">
          타로카드로 당신의 운명을 읽어드립니다
        </p>
      </header>

      <div className="tarot-categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="tarot-services">
        {filteredServices.map((service) => (
          <div key={service.id} className="tarot-card">
            <div className="tarot-card-image">
              <FontAwesomeIcon icon={service.icon} size="3x" />
            </div>
            <div className="tarot-card-content">
              <h3 className="tarot-card-title">{service.title}</h3>
              <p className="tarot-card-description">{service.description}</p>
              <div className="tarot-card-footer">
                <span>상담시간: {service.duration}</span>
                <span className="tarot-card-price">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarot;
