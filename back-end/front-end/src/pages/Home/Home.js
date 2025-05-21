import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMoon,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const bannerSlides = [
    {
      image: "/Images/banner1.jpg",
      text: "당신의 운명을 찾아보세요",
    },
    {
      image: "/Images/banner2.jpg",
      text: "오늘의 타로와 사주를 경험하세요",
    },
    {
      image: "/Images/banner3.jpg",
      text: "심리테스트로 나를 알아보세요",
    },
    {
      image: "/Images/banner4.jpg",
      text: "할인상품으로 만나보세요",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "사주 센터",
      icon: faStar,
      path: "/fortune",
      color: "#FFD700",
    },
    {
      id: 2,
      name: "타로 센터",
      icon: faMoon,
      path: "/tarot",
      color: "#9C27B0",
    },
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
    {
      id: 5,
      name: "연애상담",
      icon: faHeart,
      path: "/consultation",
      color: "#E91E63",
    },
    {
      id: 6,
      name: "연애상담",
      icon: faHeart,
      path: "/consultation",
      color: "#E91E63",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "운명의 사주 상담",
      price: "30,000원",
      image: "path-to-image",

      description: "정확한 사주 풀이로 당신의 운명을 알아보세요.",
    },
    {
      id: 2,
      title: "타로 마스터 상담",
      price: "25,000원",
      image: "path-to-image",

      description: "타로 마스터와 함께하는 심층 상담.",
    },
    // 더 많은 상품 추가 가능
  ];
  // 배너 슬라이드 상태
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  // 좌우 이동 함수
  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  // 슬라이드 클래스 계산
  const getSlideClass = (idx) => {
    if (idx === currentSlide) return "banner-slide active";
    if (idx === (currentSlide - 1 + bannerSlides.length) % bannerSlides.length)
      return "banner-slide prev";
    if (idx === (currentSlide + 1) % bannerSlides.length)
      return "banner-slide next";
    return "banner-slide";
  };

  return (
    <div className="home-container">
      <section className="banner-section">
        <div className="banner-nav">
          <button
            className="banner-arrow left"
            onClick={goToPrev}
            aria-label="이전 배너"
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <p>
            {currentSlide + 1}/{bannerSlides.length}
          </p>
          <button
            className="banner-arrow right"
            onClick={goToNext}
            aria-label="다음 배너"
          >
            <FontAwesomeIcon icon="chevron-right" />
          </button>
        </div>
        <div className="banner-slider">
          {bannerSlides.map((slide, idx) => (
            <div
              key={idx}
              className={getSlideClass(idx)}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="banner-text">{slide.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(category.path)}
          >
            <div className="imgBox"></div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </section>

      <section className="featured-section">
        <h2 className="section-title">🏅BEST</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="category-card">
              <div className="imgBox"></div>
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
