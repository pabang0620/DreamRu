import { useLocation, useNavigate } from "react-router-dom";
import "./ADHDResult.css"; // 스타일 재사용

export default function DepressionResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="result-page">
        <h2 className="result-error-title">결과 정보가 없습니다.</h2>
        <button
          className="result-button"
          onClick={() => navigate("/psychology")}
        >
          돌아가기
        </button>
      </div>
    );
  }

  const imageMap = {
    "정상 범위": ["normal1.png", "normal2.png"],
    "경미한 우울": ["mild1.png", "mild2.png"],
    "중등도 우울": ["moderate1.png", "moderate2.png"],
    "중등도~중증 우울": ["high1.png", "high2.png"],
    "심각한 우울": ["severe1.png", "severe2.png"],
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
      <h2 className="result-title">우울증 자가 진단 결과</h2>

      <img
        src={`/Images/psychology/result/depression/${selectedImage}`}
        alt={`${result.level} 이미지`}
        className="result-image-full"
      />

      <div className="result-content">
        <h1 className="result-score">{result.totalScore}점</h1>
        <h3 className="result-level">
          현재 상태: <span>{result.level}</span>
        </h3>
        <p className="result-message">{result.comment}</p>

        <div className="result-range-info">
          <p className="info-title">📊 진단 기준 안내</p>
          <ul>
            <li>0 ~ 4점: 정상 범위</li>
            <li>5 ~ 9점: 경미한 우울</li>
            <li>10 ~ 14점: 중등도 우울</li>
            <li>15 ~ 19점: 중등도~중증 우울</li>
            <li>20점 이상: 심각한 우울</li>
          </ul>
        </div>

        <button
          className="result-button"
          onClick={() => navigate("/psychology")}
        >
          테스트 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}
