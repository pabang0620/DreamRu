import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';

const Profile = () => {
  // 임시 사용자 데이터
  const user = {
    name: '홍길동',
    email: 'user@example.com'
  };

  const menuItems = [
    { 
      id: 1, 
      icon: 'calendar', 
      text: '상담 예약 내역',
      rightText: '2건'
    },
    { 
      id: 2, 
      icon: 'history', 
      text: '상담 히스토리',
      rightText: '5건'
    },
    { 
      id: 3, 
      icon: 'credit-card', 
      text: '결제 관리',
      rightText: ''
    },
    { 
      id: 4, 
      icon: 'bell', 
      text: '알림 설정',
      rightText: ''
    }
  ];

  const handleLogout = () => {
    // 로그아웃 처리 로직
    console.log('로그아웃');
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-avatar">
          <FontAwesomeIcon icon="user" className="profile-avatar-icon" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </header>

      <div className="profile-sections">
        <section className="profile-section">
          <div className="section-header">나의 활동</div>
          <div className="menu-list">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-left">
                  <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                  <span className="menu-text">{item.text}</span>
                </div>
                {item.rightText && (
                  <span className="menu-right">{item.rightText}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">계정 설정</div>
          <div className="menu-list">
            <div className="menu-item">
              <div className="menu-item-left">
                <FontAwesomeIcon icon="user-edit" className="menu-icon" />
                <span className="menu-text">프로필 수정</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-left">
                <FontAwesomeIcon icon="lock" className="menu-icon" />
                <span className="menu-text">비밀번호 변경</span>
              </div>
            </div>
          </div>
        </section>

        <div className="logout-button" onClick={handleLogout}>
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default Profile;
