import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./fortuneDetail.css";

const FortuneDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 페이지(Fortune.jsx)에서 전달된 상담사 ID
  const { teacherId = "Dae" } = location.state || {};

  const titleMap = {
    total: "종합운세 상담",
    love: "연애운 상담",
    job: "취업운 상담",
    money: "금전운 상담",
  };

  const teacherMap = {
    Dae: {
      name: "이대용 상담사",
      image: "/images/teachers/dae.png",
      description:
        "20년 이상 인간관계 중심의 상담을 진행해온 현실 기반 철학 전문가입니다. 신중하고 중심 있는 흐름 안내에 강점이 있어요.",
    },
    Do: {
      name: "최도경 상담사",
      image: "/images/teachers/do.png",
      description:
        "창업과 시기 흐름에 특화된 명리 해석을 제공해드립니다. 큰 결정 전 맥락을 정리하고 싶은 분께 추천드려요.",
    },
    Hae: {
      name: "김명숙 상담사",
      image: "/images/teachers/hae.png",
      description:
        "조용하고 부드럽지만 흐름을 정확히 짚어드리는 스타일입니다. 내면 고민이나 관계 흐름에 탁월합니다.",
    },
    Ji: {
      name: "지영언니 상담사",
      image: "/images/teachers/ji.png",
      description:
        "연애와 현실 조언에 강한 공감형 상담사입니다. 직설적이고 빠른 정리 스타일을 원하신다면 추천드려요.",
    },
    Mi: {
      name: "조예린 상담사",
      image: "/images/teachers/mi.png",
      description:
        "가볍고 감성적인 분위기에서 마음을 풀어주는 상담을 합니다. 요즘 내 감정이 흐릿할 때 잘 맞아요.",
    },
    Sa: {
      name: "김주하 상담사",
      image: "/images/teachers/sa.png",
      description:
        "전통 사주와 흐름 분석을 결합한 분석형 상담사입니다. 상황을 논리적으로 정리받고 싶을 때 추천드려요.",
    },
  };

  const title = titleMap[type] || "운세 상담";
  const teacher = teacherMap[teacherId] || teacherMap["Dae"];

  return (
    <div className="fortune-detail-container">
      <h2 className="fortune-detail-title">{title}</h2>
      <div className="fortune-teacher-section">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="fortune-teacher-image"
        />
        <div className="fortune-teacher-info">
          <h3 className="fortune-teacher-name">{teacher.name}</h3>
          <p className="fortune-teacher-desc">{teacher.description}</p>
        </div>
      </div>
      <div className="fortune-detail-description">
        <p>
          이 상담은 당신의 사주를 기반으로 현재 흐름을 살펴보고,
          <br />
          미래의 방향성과 시기를 정리해드리는 데 도움을 드립니다.
        </p>
      </div>
      <button
        className="fortune-detail-button"
        onClick={() => navigate("/fortune/chat", { state: { teacherId } })}
      >
        상담 시작하기
      </button>
    </div>
  );
};

export default FortuneDetail;
