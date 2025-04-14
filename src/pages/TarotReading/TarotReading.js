import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TarotReading.css';

const TarotReading = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [currentPage, setCurrentPage] = useState(0); // 페이지 번호 (0부터 시작)
  const cardsPerPage = 12; // ← 기존 15에서 12로 수정

  const [cards, setCards] = useState([]);
  const [fadeKey, setFadeKey] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null); // 중앙 확대/뒤집기 중인 카드 ID
  const [startExitMotion, setStartExitMotion] = useState(false);

  const questions = [
    "상대방과의 과거를 생각하며 한 장을 골라주세요",
    "상대방과의 현재를 생각하며 한 장을 뽑아주세요",
    "상대방과의 미래를 생각하며 한 장을 뽑아주세요",
    "아래의 카드들을 통해 타로 해석을 확인해보세요."
  ];


  useEffect(() => {
    const newCards = Array.from({ length: 78 }, (_, index) => ({
      id: index + 1,
    }));
    setCards(newCards);
  }, []);

  const handleCardClick = (cardId) => {
    if (selectedCards.includes(cardId) || selectedCards.length >= 3 || animatingCard !== null) return;
    console.log(animatingCard)
    const randomNumber = Math.floor(Math.random() * 78) + 1;
    const selected = {
      id: cardId,
      image: `/images/tarot-cards/${randomNumber}.jpg`,
      backupImage: 'https://picsum.photos/300/500'
    };

    setAnimatingCard(selected); // 선택 카드 정보까지 넘김
  };

  useEffect(() => {
    if (!animatingCard) return;

    setSelectedCards(prev => [...prev, animatingCard.id]);
    const exitDelay = setTimeout(() => {
      setStartExitMotion(true);

    }, 1500);

    const cleanup = setTimeout(() => {
      setRandomCards(prev => [...prev, animatingCard]);
      setAnimatingCard(null);
      setStartExitMotion(false);
    }, 2200);

    return () => {
      clearTimeout(exitDelay);
      clearTimeout(cleanup);
    };
  }, [animatingCard]);



  if (!product) {
    return <div>잘못된 접근입니다.</div>;
  }


  return (
    <div className="tarot-reading-container">
      <div className="reading-header">
        <h1>{product.title}</h1>
        <p>연애 타로 리딩</p>
      </div>

      {selectedCards.length < 3 ? (
        <div className="instruction">
          <p>{questions[selectedCards.length]}</p>
          <p className="sub-text">카드를 눌러 선택해주세요.</p>
        </div>
      ) : (
        <div className="instruction result-message">
          <p>세 장의 카드를 모두 선택하셨습니다.</p>
          <p className="sub-text">이제 아래에 나타난 카드를 통해 타로 리딩을 확인해보세요.</p>
        </div>
      )}

      <div className="tab-bar">
        {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`tab-button ${currentPage === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentPage(index);
              setFadeKey((prev) => prev + 1); // 페이드 트리거
            }}
          >
            {index + 1}
          </button>

        ))}
      </div>

      <div className="cards-scroll-area">
        <div key={currentPage} className="cards-grid-3rows">
          {cards
            .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
            .map((card, index) => {
              const isSelected = selectedCards.includes(card.id);
              const delay = index * 0.08; // 0.05초 간격으로 순차 딜레이

              return (
                <div
                  key={card.id}
                  className={`card ${isSelected ? 'selected' : ''} fade-in`}
                  onClick={() => handleCardClick(card.id)}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div className="card-inner">
                    <div className="card-front" />
                  </div>
                </div>
              );
            })}

        </div>


      </div>
      {animatingCard && !startExitMotion && (
        <div className="screen-glow-effect" />
      )}

      {animatingCard && (
        <div className={`card-overlay`}>
          <div className={`card-animate-flip ${startExitMotion ? 'card-exit-magic' : ''}`}>
            <div className="card-inner flipped">
              <div className="card-face card-front" />
              <div className="card-face card-back">
                <img
                  src={animatingCard.image}
                  alt="선택 카드"
                  onError={(e) => (e.target.src = animatingCard.backupImage)}
                />
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="selected-cards-section">
        {randomCards.map((card, index) => (
          <div key={index} className="selected-card">
            <h4>{["과거", "현재", "미래"][index]}</h4>
            <img
              src={card.image}
              alt={`선택된 카드 ${index + 1}`}
              onError={(e) => (e.target.src = card.backupImage)}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default TarotReading;
