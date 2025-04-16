import { useLocation, useNavigate } from "react-router-dom";
import "./StressResult.css";

export default function StressResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="result-page">
        <h2 className="result-error-title">결과 정보가 없습니다.</h2>
        <button className="result-button" onClick={() => navigate("/psychology")}>
          돌아가기
        </button>
      </div>
    );
  }

  const imageMap = {
    낮음: ["low1.png", "low2.png"],
    보통: ["mid1.png", "mid2.png"],
    높음: ["high1.png", "high2.png"],
    "매우 높음": ["veryhigh1.png", "veryhigh2.png"],
  };

  const getRandomImage = (level) => {
    const images = imageMap[level] || [];
    if (images.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const selectedImage = getRandomImage(result.level);

  return (
    <div className="result-page">
      <h2 className="result-title">스트레스 지수 검사 결과</h2>

      <img
        src={`/Images/psychology/result/stress/${selectedImage}`}
        alt={`${result.level} 이미지`}
        className="result-image-full"
      />

      <div className="result-content">
        <h1 className="result-score">{result.totalScore}점</h1>
        <h3 className="result-level">
          현재 상태: <span>{result.level}</span>
        </h3>
        <p className="result-message">{result.message}</p>

        <div className="result-range-info">
          <p className="info-title">📊 진단 기준 안내</p>
          <ul>
            <li>0 ~ 7점: 낮음 — 안정된 상태 😊</li>
            <li>8 ~ 15점: 보통 — 일상적 스트레스 🙂</li>
            <li>16 ~ 23점: 높음 — 주의 요망 😥</li>
            <li>24점 이상: 매우 높음 — 적극적인 관리 필요 😵‍💫</li>
          </ul>
        </div>

        <button className="result-button" onClick={() => navigate("/psychology")}>
          테스트 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}
