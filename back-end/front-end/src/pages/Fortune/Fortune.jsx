import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faBriefcase,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import "./Fortune.css";

const Fortune = () => {
  const navigate = useNavigate();

  const fortuneServices = [
    {
      id: 1,
      teacherId: "Dae",
      title: "이대용 상담사",
      description:
        "20년 경력의 현실 기반 조언, 인간관계와 전환기에 강한 흐름 분석",
      price: "50,000원",
      icon: faStar,
      image: "/images/teachers/dae.png",
    },
    {
      id: 2,
      teacherId: "Do",
      title: "최도경 상담사",
      description:
        "창업과 타이밍 중심의 깊이 있는 명리 해석, 묵직한 상담 스타일",
      price: "50,000원",
      icon: faBriefcase,
      image: "/images/teachers/do.png",
    },
    {
      id: 3,
      teacherId: "Hae",
      title: "김명숙 상담사",
      description:
        "흐름 위주의 부드럽고 신중한 해석, 내면 고민에 강한 공감형 상담",
      price: "40,000원",
      icon: faHeart,
      image: "/images/teachers/hae.png",
    },
    {
      id: 4,
      teacherId: "Ji",
      title: "지영언니 상담사",
      description:
        "직설적이고 현실적인 연애 상담, 20~30대에게 공감력 높은 조언",
      price: "30,000원",
      icon: faHeart,
      image: "/images/teachers/ji.png",
    },
    {
      id: 5,
      teacherId: "Sa",
      title: "김주하 상담사",
      description: "이성적이고 논리적인 구조 분석, 명확한 흐름 정리에 강점",
      price: "40,000원",
      icon: faCoins,
      image: "/images/teachers/sa.png",
    },
    {
      id: 6,
      teacherId: "Mi",
      title: "조예린 상담사",
      description: "감정 흐름과 기운 체크 중심, 부드럽고 밝은 리딩 스타일",
      price: "30,000원",
      icon: faStar,
      image: "/images/teachers/mi.png",
    },
  ];

  const handleClick = (teacherId) => {
    navigate(`/fortune/chat`, { state: { teacherId } });
  };

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
          <div
            key={service.id}
            className="fortune-service-card"
            onClick={() => handleClick(service.teacherId)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="fortune-service-image"
            />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fortune;
