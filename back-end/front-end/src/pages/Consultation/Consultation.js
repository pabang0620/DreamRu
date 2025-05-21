import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Consultation.css';

const Consultation = () => {
  const consultationTypes = [
    {
      id: 1,
      title: '연애 고민 상담',
      description: '연애와 관련된 모든 고민을 전문 상담사와 함께 해결해보세요.',
      price: '45,000원',
      duration: '40분',
      features: [
        { icon: 'heart', text: '연애 문제 해결' },
        { icon: 'comments', text: '실시간 음성 상담' },
        { icon: 'user-shield', text: '전문 상담사 배정' },
        { icon: 'clock', text: '24시간 상담 가능' }
      ]
    },
    {
      id: 2,
      title: '심리 상담',
      description: '일상의 스트레스, 불안, 우울 등 심리적 어려움을 함께 극복해요.',
      price: '50,000원',
      duration: '50분',
      features: [
        { icon: 'brain', text: '심리 분석' },
        { icon: 'comments', text: '실시간 음성 상담' },
        { icon: 'certificate', text: '전문 심리 상담사' },
        { icon: 'user-lock', text: '비밀 보장' }
      ]
    },
    {
      id: 3,
      title: '성격 유형 상담',
      description: 'MBTI 등 성격 유형을 바탕으로 맞춤형 상담을 제공합니다.',
      price: '40,000원',
      duration: '35분',
      features: [
        { icon: 'users', text: '성격 유형 분석' },
        { icon: 'chart-pie', text: '상세 리포트 제공' },
        { icon: 'comments', text: '실시간 음성 상담' },
        { icon: 'star', text: '맞춤형 조언' }
      ]
    }
  ];

  return (
    <div className="consultation-container">
      <header className="consultation-header">
        <h1>전문 상담</h1>
        <p className="consultation-description">
          전문 상담사와 함께 고민을 해결해보세요
        </p>
      </header>

      <div className="consultation-types">
        {consultationTypes.map((type) => (
          <div key={type.id} className="consultation-card">
            <div className="consultation-card-header">
              <h2>{type.title}</h2>
            </div>
            <div className="consultation-card-content">
              <p>{type.description}</p>
              <div className="consultation-features">
                {type.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="consultation-price">
              <div>
                <div className="price-amount">{type.price}</div>
                <div>상담시간: {type.duration}</div>
              </div>
              <button className="consultation-button">
                상담 신청
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultation;
