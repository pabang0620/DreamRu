import { useLocation, useNavigate } from "react-router-dom";
import "./ADHDResult.css";

export default function ADHDResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, name } = location.state || {};

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
    정상: ["normal1.png", "normal2.png"],
    주의: ["caution1.png", "caution2.png"],
    높음: ["high1.png", "high2.png"],
  };

  // 현재 레벨에 해당하는 이미지 중 하나를 랜덤으로 선택
  const getRandomImage = (level) => {
    const images = imageMap[level] || [];
    if (images.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const selectedImage = getRandomImage(result.level);

  return (
    <div className="result-page">
      {name && (
        <p className="result-user">
          <strong>{name}</strong>님의 검사 결과입니다.
        </p>
      )}
      <h2 className="result-title">ADHD 자가 진단 결과</h2>
      {name && (
        <p className="result-user">
          <strong>{name}</strong>님의 검사 결과입니다.
        </p>
      )}
      <img
        src={`/Images/psychology/result/adhd/${selectedImage}`}
        alt={`${result.level} 단계 이미지`}
        className="result-image-full"
      />

      <div className="result-content">
        <h1 className="result-score">{result.score}점</h1>
        <h3 className="result-level">
          현재 상태: <span>{result.level}</span>
        </h3>
        <p className="result-message">{result.message}</p>

        <div className="result-range-info">
          <p className="info-title">📊 진단 기준 안내</p>
          <ul>
            <li>0 ~ 12점: 정상 — 걱정하지 않으셔도 괜찮아요 🙂</li>
            <li>13 ~ 23점: 주의 — 조금 더 관찰해보는 게 좋아요 👀</li>
            <li>24점 이상: 높음 — 전문가의 도움이 필요할 수 있어요 🧠</li>
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
