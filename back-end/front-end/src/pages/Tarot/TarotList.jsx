import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TarotList.css";

const TarotList = () => {
  const navigate = useNavigate();
  // 임시 데이터 (나중에 API로 대체)
  const [products] = useState([
    {
      id: 1,
      title: "지금 이 사랑, 진짜 맞을까?",
      description: [
        "🩷 현재 마음 상태와 앞으로의 가능성을 분석합니다.",
        "🩷 사랑과 연애에 대한 깊은 다양한 상황을 다룹니다.",
        "🩷 불확실한 감정 속에서 방향을 찾고 싶은 분들께 추천!",
      ],
      price: 30000,
      image: "/images/taro/romance_thumbnail.png",
    },
    {
      id: 2,
      title: "내 직업운, 제대로 가고 있나 확인!",
      description: [
        "✏️ 진로, 직장, 취업 등 직업에 관한 고민을 상담해드립니다.",
        "✏️ 현재 나의 업무 환경과 커리어 방향성을 타로로 점검합니다.",
        "✏️ 불안정한 직업 상황에서 해답을 얻고 싶은 분께 추천!",
      ],
      price: 35000,
      image: "/images/tarot-career.jpg",
    },
    {
      id: 3,
      title: "전반적인 운세가 궁금하다면?",
      description: [
        "☀️ 연애, 금전, 건강 등 운세를 종합적으로 봐드립니다.",
        "☀️ 현재 상황과 가까운 과거, 현재, 미래를 분석합니다.",
        "☀️ 막연한 불안감을 해소하고 싶은 분들께 적합합니다.",
      ],
      price: 40000,
      image: "/images/taro/total_thumbnail.png",
    },
  ]);

  const handleProductClick = (product) => {
    navigate(`/tarot/${product.id}`, { state: { product } });
  };

  return (
    <div className="tarot-list-container">
      <h1 className="tarot-title">타로 센터</h1>
      <div className="tarot-products">
        {products.map((product) => (
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
              <div className="price">
                <p>{new Intl.NumberFormat("ko-KR").format(product.price)}원</p>
                <span>무료⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotList;
