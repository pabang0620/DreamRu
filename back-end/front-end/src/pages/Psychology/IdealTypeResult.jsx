import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { idealTypeDescriptions } from "../../utils/psychology/psychologyResultUtils";
import "./IdealTypeResult.css";
import Spinner from "../../components/layout/Spinner";

// 이미지 매핑
const idealImageMap = {
  "감성 충만 로맨티스트": "ideal1.png",
  "겉차속따 츤데레형": "ideal2.png",
  "열정 폭발 직진형": "ideal3.png",
  "든든한 안정지향형": "ideal4.png",
  "친구 같은 연애형": "ideal5.png",
  "쿨하고 자유로운 독립형": "ideal6.png",
};

export default function IdealTypeResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // URL 쿼리에서 결과와 이름 가져오기
  const queryType = searchParams.get("type");
  const queryName = searchParams.get("name");

  // state 기반 → 쿼리 기반 fallback 처리
  const resultKey = location.state?.result || queryType;
  const name = location.state?.name || queryName;

  const myResult = idealTypeDescriptions[resultKey];
  const [selectedKey, setSelectedKey] = useState(resultKey);
  const selectedCard = idealTypeDescriptions[selectedKey];


    // 스피너 로딩 // 스피너 로딩
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
    // 스피너 로딩 // 스피너 로딩

  if (!resultKey || !myResult) {
    return (
      <div className="ideal-result-page">
        <h2 className="ideal-result-error">결과 정보가 없습니다.</h2>
        <button
          className="ideal-result-button"
          onClick={() => navigate("/psychology")}
        >
          돌아가기
        </button>
      </div>
    );
  }

  const handleShare = () => {
    const baseUrl = `${window.location.origin}/psychology/idealType/result`;
    const query = `?type=${encodeURIComponent(resultKey)}&name=${encodeURIComponent(name || "")}`;
    const shareUrl = `${baseUrl}${query}`;
    navigator.clipboard.writeText(shareUrl);
    alert("공유 링크가 복사되었습니다! 친구에게 붙여넣어 전달해보세요.");
  };


  if (loading) return <Spinner />;

  return (
    <div className="ideal-result-page">
      <h2 className="ideal-result-title">💘 이상형 유형 결과</h2>
      {name && <p className="ideal-result-user"><strong>{name}</strong>님의 검사 결과입니다.</p>}

      {/* 내 유형 */}
      <div className="ideal-result-card">
        <img
          src={`${process.env.PUBLIC_URL}/Images/psychology/result/ideal/${idealImageMap[myResult.title]}`}
          alt={myResult.title}
          className="ideal-result-image"
        />
        <h1 className="ideal-result-type">{myResult.title}</h1>
        <p className="ideal-result-description">{myResult.description}</p>
      </div>

      {/* 잘 맞는/덜 맞는 카드 */}
      <div className="ideal-match-section">
        <div className="ideal-type-card">
          <h3 className="ideal-type-label">🧡 잘 맞는 이상형</h3>
          <img
            src={`${process.env.PUBLIC_URL}/Images/psychology/result/ideal/${idealImageMap[myResult.bestMatch]}`}
            alt={myResult.bestMatch}
            className="ideal-type-image"
          />
          <p className="ideal-type-title">{myResult.bestMatch}</p>
          <p className="ideal-type-reason">{myResult.bestReason}</p>
        </div>

        <div className="ideal-type-card">
          <h3 className="ideal-type-label">💔 덜 맞는 이상형</h3>
          <img
            src={`${process.env.PUBLIC_URL}/Images/psychology/result/ideal/${idealImageMap[myResult.badMatch]}`}
            alt={myResult.badMatch}
            className="ideal-type-image"
          />
          <p className="ideal-type-title">{myResult.badMatch}</p>
          <p className="ideal-type-reason">{myResult.badReason}</p>
        </div>
      </div>

      {/* 다른 카드 보기 */}
      <h4 className="ideal-card-list-title">💡 다른 이상형 카드 보기</h4>
      <div className="ideal-card-scroll-wrapper">
        {Object.entries(idealTypeDescriptions).map(([key, data]) => (
          <button
            key={key}
            className={`ideal-card-button ${key === selectedKey ? "active" : ""}`}
            onClick={() => setSelectedKey(key)}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* 선택한 카드 상세 */}
      <div className="ideal-card-detail">
        <img
          src={`${process.env.PUBLIC_URL}/Images/psychology/result/ideal/${idealImageMap[selectedCard.title]}`}
          alt={selectedCard.title}
          className="ideal-card-detail-image"
        />
        <h5>{selectedCard.title}</h5>
        <p>{selectedCard.description}</p>
      </div>

      {/* 공유 & 다시 하기 */}
      <div className="ideal-button-group">
        <button className="ideal-share-button" onClick={handleShare}>
          📤 친구에게 공유하기
        </button>

        <button
          className="ideal-result-button"
          onClick={() => navigate("/psychology/idealType")}
        >
          🔁 다시 하기
        </button>
      </div>
    </div>
  );
}
