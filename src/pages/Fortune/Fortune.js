import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Fortune.css';

const Fortune = () => {
  const fortuneServices = [
    {
      id: 1,
      title: '종합운세 상담',
      description: '사주와 운세를 바탕으로 전반적인 운세를 상담해드립니다.',
      price: '50,000원',
      icon: 'star',
      duration: '30분'
    },
    {
      id: 2,
      title: '연애운 상담',
      description: '현재와 미래의 연애운을 살펴보고 조언해드립니다.',
      price: '30,000원',
      icon: 'heart',
      duration: '20분'
    },
    {
      id: 3,
      title: '취업운 상담',
      description: '취업과 직장운에 대해 상담해드립니다.',
      price: '30,000원',
      icon: 'briefcase',
      duration: '20분'
    },
    {
      id: 4,
      title: '금전운 상담',
      description: '재물운과 금전운에 대해 상담해드립니다.',
      price: '30,000원',
      icon: 'coins',
      duration: '20분'
    }
  ];

  return (
    <div className="fortune-container">
      <header className="fortune-header">
        <h1>사주 상담</h1>
        <p className="fortune-description">
          전문가의 사주 분석으로 당신의 운세를 알아보세요
        </p>
      </header>

      <div className="fortune-services">
        {fortuneServices.map((service) => (
          <div key={service.id} className="fortune-service-card">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-duration">상담시간: {service.duration}</p>
              <p className="service-price">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fortune;
