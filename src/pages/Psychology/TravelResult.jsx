import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./TravelResult.css";
import { travelResultMap } from "../../utils/psychology/psychologyResultUtils";
import Spinner from "../../components/layout/Spinner";

// 이미지 매핑
const travelImageMap = {
  계획요정: "travel1.png",
  즉흥러: "travel2.png",
  모험왕: "travel3.png",
  힐링러: "travel4.png",
  맛집러: "travel5.png",
  단체파: "travel6.png",
  혼행러: "travel7.png",
  심플러: "travel8.png",
};

export default function TravelResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlType = searchParams.get("type");
  const urlName = searchParams.get("name");

  const resultFromType = Object.values(travelResultMap).find(
    (item) => item.type === urlType
  );

  const result = location.state?.result || resultFromType;
  const name = location.state?.name || urlName;

  const [selectedKey, setSelectedKey] = useState(result?.type || "계획요정");
  const selectedCard = Object.values(travelResultMap).find(
    (card) => card.type === selectedKey
  );

  // 스피너 로딩 // 스피너 로딩
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  // 스피너 로딩 // 스피너 로딩

  if (!result) {
    return (
      <div className="travel-result-page">
        <h2 className="travel-result-error-title">결과 정보가 없습니다.</h2>
        <button
          className="travel-result-button"
          onClick={() => navigate("/psychology")}
        >
          돌아가기
        </button>
      </div>
    );
  }

  const getNicknameByType = (typeName) => {
    return Object.values(travelResultMap).find((item) => item.type === typeName)
      ?.nickname;
  };

  const handleShare = () => {
    const base = window.location.origin + "/psychology/travel/result";
    const query = `?type=${encodeURIComponent(
      result.type
    )}&name=${encodeURIComponent(name || "")}`;
    const fullUrl = base + query;

    navigator.clipboard.writeText(fullUrl);
    alert("공유 링크가 복사되었습니다!\n친구에게 붙여넣어 전달해보세요.");
  };

  if (loading) return <Spinner />;

  return (
    <div className="travel-result-page">
      <h2 className="travel-result-title">여행 성격 검사 결과</h2>
      {name && (
        <p className="travel-result-user">
          <strong>{name}</strong>님의 검사 결과입니다.
        </p>
      )}

      <div className="travel-result-card">
        <img
          src={`${process.env.PUBLIC_URL}/Images/psychology/result/travel/${
            travelImageMap[result.type]
          }`}
          alt={result.type}
          className="travel-result-main-image"
        />
        <h1 className="travel-result-type">{result.type}</h1>
        <p className="travel-result-nickname">{result.nickname}</p>
        <p className="travel-result-message">{result.message}</p>
      </div>

      <div className="travel-recommend-section">
        {result.compatible && (
          <div className="travel-type-card">
            <h3 className="travel-type-label">🧡 잘 맞는 여행러</h3>
            <img
              src={`${process.env.PUBLIC_URL}/Images/psychology/result/travel/${
                travelImageMap[result.compatible]
              }`}
              alt={result.compatible}
              className="travel-type-image"
            />
            <p className="travel-type-subtype">{result.compatible}</p>
            <p className="travel-type-nickname">
              {getNicknameByType(result.compatible)}
            </p>
          </div>
        )}
        {result.incompatible && (
          <div className="travel-type-card">
            <h3 className="travel-type-label">💔 잘 안 맞는 여행러</h3>
            <img
              src={`${process.env.PUBLIC_URL}/Images/psychology/result/travel/${
                travelImageMap[result.incompatible]
              }`}
              alt={result.incompatible}
              className="travel-type-image"
            />
            <p className="travel-type-subtype">{result.incompatible}</p>
            <p className="travel-type-nickname">
              {getNicknameByType(result.incompatible)}
            </p>
          </div>
        )}
      </div>

      <h4 className="travel-card-list-title">💡 모든 여행 성격 보기</h4>
      <div className="travel-card-scroll">
        {Object.entries(travelResultMap).map(([key, item]) => (
          <button
            key={key}
            className={`travel-card-button ${
              item.type === selectedKey ? "active" : ""
            }`}
            onClick={() => setSelectedKey(item.type)}
          >
            {item.type}
          </button>
        ))}
      </div>

      <div className="travel-card-detail">
        <img
          src={`${process.env.PUBLIC_URL}/Images/psychology/result/travel/${
            travelImageMap[selectedCard.type]
          }`}
          alt={selectedCard.type}
          className="travel-card-detail-image"
        />
        <h5>{selectedCard.type}</h5>
        <p className="travel-type-nickname">{selectedCard.nickname}</p>
        <p className="travel-type-reason">{selectedCard.message}</p>
      </div>

      <div className="travel-button-group">
        <button className="travel-share-button" onClick={handleShare}>
          📤 친구에게 공유하기
        </button>
        <button
          className="travel-result-button"
          onClick={() => navigate("/psychology/travel")}
        >
          🔁 다시 하기
        </button>
      </div>
    </div>
  );
}
