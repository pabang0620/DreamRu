import { useLocation, useNavigate } from "react-router-dom";
import {
  mbtiDescriptions,
  mbtiExtraInfo,
} from "../../utils/psychology/psychologyResultUtils";
import "./MbtiResult.css";
import { useMemo, useState } from "react";

export default function MbtiResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const [revealed, setRevealed] = useState({
    fortune: false,
    warning: false,
    good: false,
    bad: false,
  });

  // 랜덤 추출
  const fortune = useMemo(() => {
    const arr = mbtiExtraInfo.randomFortunes;
    return arr[Math.floor(Math.random() * arr.length)];
  }, []);

  const warning = useMemo(() => {
    const arr = mbtiExtraInfo.randomWarnings;
    return arr[Math.floor(Math.random() * arr.length)];
  }, []);

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

  const goodMatch = mbtiExtraInfo.goodMatch[result]?.join(", ") || "-";
  const badMatch = mbtiExtraInfo.badMatch[result]?.join(", ") || "-";

  return (
    <div className="result-page">
      <h2 className="result-title">당신의 MBTI 결과는</h2>

      <img
        src={`/Images/psychology/result/mbti/${result}.png`}
        alt={`${result} 결과 이미지`}
        className="result-mbti-image"
      />

      <p className="result-description">
        {mbtiDescriptions[result] || "결과 설명이 준비되지 않았습니다."}
      </p>

      {/* 추가 항목 */}
      <div className="mbti-extra-box">
        {/* 운세 */}
        <div
          className={`reveal-card ${revealed.fortune ? "open" : ""}`}
          onClick={() => setRevealed({ ...revealed, fortune: true })}
        >
          <h3>✨ {result}의 오늘 운세</h3>
          {revealed.fortune && <p>{fortune}</p>}
        </div>

        {/* 경고 */}
        <div
          className={`reveal-card ${revealed.warning ? "open" : ""}`}
          onClick={() => setRevealed({ ...revealed, warning: true })}
        >
          <h3>⚠️ {result}가 오늘 피해야 할 것</h3>
          {revealed.warning && <p>{warning}</p>}
        </div>

        {/* 잘 맞는 궁합 */}
        <div
          className={`reveal-card ${revealed.good ? "open" : ""}`}
          onClick={() => setRevealed({ ...revealed, good: true })}
        >
          <h3>💗 {result}와 잘 맞는 MBTI</h3>
          {revealed.good && <p>{goodMatch}</p>}
        </div>

        {/* 안 맞는 궁합 */}
        <div
          className={`reveal-card ${revealed.bad ? "open" : ""}`}
          onClick={() => setRevealed({ ...revealed, bad: true })}
        >
          <h3>💥 {result}와 충돌할 수 있는 MBTI</h3>
          {revealed.bad && <p>{badMatch}</p>}
        </div>
      </div>

      <button className="result-button" onClick={() => navigate("/psychology")}>
        테스트 목록으로 돌아가기
      </button>
    </div>
  );
}
