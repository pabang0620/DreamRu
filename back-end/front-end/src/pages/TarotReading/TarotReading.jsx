import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TarotReading.css";

import questions from "./questions"; // 추가된 부분
// import TarotResult from "./TarotResult";

const TarotReading = ({ cardColor }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const [readingType, setReadingType] = useState("romance"); // 상태로 관리

  const getReadingType = (product) => {
    if (!product || !product.title) return "romance"; // 기본값
    const title = product.title.toLowerCase();
    if (title.includes("건강")) return "health";
    if (title.includes("직업") || title.includes("취업")) return "job";
    if (title.includes("학업") || title.includes("공부")) return "study";
    if (title.includes("연애")) return "romance";
    if (title.includes("재물") || title.includes("부")) return "wealth";
    return "romance"; // fallback
  };

  useEffect(() => {
    if (product && product.title) {
      setReadingType(getReadingType(product));
    }
  }, [product]); // product가 바뀔 때마다 readingType을 설정

  const [currentPage, setCurrentPage] = useState(0); // 페이지 번호 (0부터 시작)
  const cardsPerPage = 16; // ← 기존 15에서 12로 수정

  const [cards, setCards] = useState([]);
  const [fadeKey, setFadeKey] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null); // 중앙 확대/뒤집기 중인 카드 ID
  const [startExitMotion, setStartExitMotion] = useState(false);
  // questions 파일에서 가져온 질문들
  const currentQuestions = questions[readingType] || questions["romance"];

  useEffect(() => {
    // Major Arcana (0~21)
    const majorCards = Array.from({ length: 22 }, (_, index) => ({
      id: `major-${index}`,
      image: `${process.env.PUBLIC_URL}/Images/taro/major/${index}.png`,
    }));

    // Minor Arcana (Cups, Pentacles, Swords, Wands)
    const suits = ["cups", "pentacles", "swords", "wands"];
    const minorCards = suits.flatMap((suit) =>
      Array.from({ length: 14 }, (_, index) => ({
        id: `minor-${suit}-${index + 1}`,
        image: `${process.env.PUBLIC_URL}/Images/taro/minor/${suit}/${
          index + 1
        }.png`,
      }))
    );

    // Combine and shuffle cards
    const allCards = [...majorCards, ...minorCards];
    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (cardId) => {
    if (
      selectedCards.includes(cardId) ||
      selectedCards.length >= 3 ||
      animatingCard !== null
    )
      return;

    const selected = cards.find((card) => card.id === cardId);

    setAnimatingCard(selected);
  };

  useEffect(() => {
    if (!animatingCard) return;

    setSelectedCards((prev) => [...prev, animatingCard.id]);

    const exitDelay = setTimeout(() => {
      setStartExitMotion(true);
    }, 1500);

    const cleanup = setTimeout(() => {
      setRandomCards((prev) => [...prev, animatingCard]);
      setAnimatingCard(null);
      setStartExitMotion(false);
    }, 2200);

    return () => {
      clearTimeout(exitDelay);
      clearTimeout(cleanup);
    };
  }, [animatingCard]);
  const [cardAnimations, setCardAnimations] = useState([]);
  const updateFadeInCards = (newPage) => {
    const newIds = cards
      .slice(newPage * cardsPerPage, (newPage + 1) * cardsPerPage)
      .map((c) => c.id);
    const newAnimations = {};
    newIds.forEach((id) => {
      newAnimations[id] = "fade-in";
    });
    setCardAnimations(newAnimations);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const scrollArea = document.querySelector(".cards-scroll-area");

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchEndX - touchStartX;

      const maxPage = Math.ceil(cards.length / cardsPerPage) - 1;

      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0 && currentPage > 0) {
          updateFadeInCards(currentPage - 1); // ⬅️ 수정
        } else if (swipeDistance < 0 && currentPage < maxPage) {
          updateFadeInCards(currentPage + 1); // ⬅️ 수정
        }
      }
    };

    scrollArea.addEventListener("touchstart", handleTouchStart);
    scrollArea.addEventListener("touchend", handleTouchEnd);

    return () => {
      scrollArea.removeEventListener("touchstart", handleTouchStart);
      scrollArea.removeEventListener("touchend", handleTouchEnd);
    };
  }, [cards, currentPage]);

  useEffect(() => {
    if (randomCards.length === 3) {
      const timeout = setTimeout(() => {
        navigate(
          `/tarot-reading/${location.state?.product?.id || "result"}/result`,
          {
            state: {
              cards: randomCards,
              type: readingType,
              fromTarotReading: true,
            },
          }
        );
      }, 2000); // 2초 후 이동

      return () => clearTimeout(timeout); // cleanup
    }
  }, [randomCards, navigate, location.state?.product?.id, readingType]);

  // 이미지 경로
  const backImageSrc = `${process.env.PUBLIC_URL}/Images/tarocard/${
    cardColor || "blue.png"
  }`;

  if (!product) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="tarot-reading-container">
      <div className="reading-header">
        <h1>{product.title}</h1>
      </div>

      {selectedCards.length < 3 ? (
        <div className="instruction">
          {currentQuestions[selectedCards.length]}
        </div>
      ) : (
        <div className="instruction taro-end-message">
          <p>세 장의 카드를 모두 선택하셨습니다.</p>
          <p className="sub-text">
            이제 아래에 나타난 카드를 통해 타로 리딩을 확인해보세요.
          </p>
        </div>
      )}

      <div className="dot-indicator">
        {Array.from(
          { length: Math.ceil(cards.length / cardsPerPage) },
          (_, index) => (
            <span
              key={index}
              className={`dot ${currentPage === index ? "active" : ""}`}
            />
          )
        )}
      </div>

      <div className="cards-scroll-area">
        <div key={currentPage} className="cards-grid-3rows">
          {cards
            .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
            .map((card, index) => {
              const isSelected = selectedCards.includes(card.id);
              const delay = index * 0.08; // 카드 뜨는 딜레이
              return (
                <div
                  key={card.id}
                  className={`card ${
                    isSelected
                      ? "selected"
                      : cardAnimations[card.id] || "ripple"
                  }`}
                  onClick={() => handleCardClick(card.id)}
                  style={{ animationDelay: `${delay}s` }}
                  onAnimationEnd={() => {
                    if (cardAnimations[card.id] === "fade-in") {
                      setCardAnimations((prev) => ({
                        ...prev,
                        [card.id]: "ripple",
                      }));
                    }
                  }}
                >
                  <div className="card-inner">
                    <img
                      src={backImageSrc}
                      alt="타로 카드 뒷면"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
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
          <div
            className={`card-animate-flip ${
              startExitMotion ? "card-exit-magic" : ""
            }`}
          >
            <div className="card-inner flipped">
              <div className="card-face card-front">
                <img
                  src={backImageSrc}
                  alt="타로 카드 뒷면"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

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
