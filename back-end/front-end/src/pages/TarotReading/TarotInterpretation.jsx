import React, { useEffect, useState } from "react";

function getCardType(id) {
  if (id >= 0 && id <= 21) return "major";
  if (id >= 22 && id <= 35) return "cups";
  if (id >= 36 && id <= 49) return "wands";
  if (id >= 50 && id <= 63) return "swords";
  if (id >= 64 && id <= 77) return "pentacles";
  return null;
}

function getCardIndex(id) {
  if (id <= 21) return id;
  return ((id - 1) % 14) + 1;
}

const TarotInterpretation = ({ cards, category }) => {
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    const loadMeanings = async () => {
      const results = await Promise.all(
        cards.map(async (card) => {
          const type = getCardType(card.id);
          const index = getCardIndex(card.id);
          try {
            const res = await import(
              `../../utils/taro/${category}/${type}.json`
            );
            const cardData = res.default.find((item) => item.id === index);
            return {
              ...card,
              ...cardData,
              type,
            };
          } catch (err) {
            console.error("해석 불러오기 실패:", err);
            return {
              id: card.id,
              title: "알 수 없음",
              meaning: "해석을 찾을 수 없습니다.",
            };
          }
        })
      );
      setMeanings(results);
    };

    loadMeanings();
  }, [cards, category]);

  return (
    <div className="tarot-interpretation">
      <h2>🔮 타로 해석 결과</h2>
      <div className="card-meaning-list">
        {meanings.map((card, idx) => (
          <div key={idx} className="card-meaning">
            <h3>🔹 {["과거", "현재", "미래"][idx]}</h3>
            <p>
              <strong>{card.title}</strong>
            </p>
            <p>{card.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotInterpretation;
