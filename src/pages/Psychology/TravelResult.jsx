import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TravelResult.css";
import { travelResultMap } from "../../utils/psychology/psychologyResultUtils";

export default function TravelResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [previewType, setPreviewType] = useState(null);
  const { result, name } = location.state || {};

  if (!result) {
    return (
      <div className="travel-result-page">
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

  // 한글 유형 이름 → travelResultMap 키값으로 변환
  const getTravelTypeKey = (displayName) => {
    const found = Object.entries(travelResultMap).find(
      ([_, val]) => val.type === displayName
    );
    return found?.[0] || null;
  };

  return (
    <div className="travel-result-page">
      <h2 className="result-title">여행 성격 검사 결과</h2>
      {name && (
        <p className="result-user">
          <strong>{name}</strong>님의 검사 결과입니다.
        </p>
      )}
      <div className="travel-result-card">
        <h1 className="result-type">{result.type}</h1>
        <p className="result-nickname">{result.nickname}</p>
        <p className="result-message">{result.message}</p>

        <p className="result-compatible">
          🧳 잘 맞는 여행러:&nbsp;
          {result.compatible.split(",").map((type, index) => (
            <span
              key={index}
              className="clickable-travel-type"
              onClick={() => setPreviewType(getTravelTypeKey(type.trim()))}
            >
              {type.trim()}
            </span>
          ))}
        </p>
      </div>

      {/* 🔍 미리보기 모달 */}
      {previewType && (
        <div
          className="travel-modal-overlay"
          onClick={() => setPreviewType(null)}
        >
          <div className="travel-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{travelResultMap[previewType]?.type}</h3>
            <p className="travel-modal-nickname">
              {travelResultMap[previewType]?.nickname}
            </p>
            <p className="travel-modal-message">
              {travelResultMap[previewType]?.message
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
            <button
              className="modal-close-button"
              onClick={() => setPreviewType(null)}
            >
              닫기
            </button>{" "}
          </div>
        </div>
      )}

      <button className="result-button" onClick={() => navigate("/psychology")}>
        테스트 목록으로 돌아가기
      </button>
    </div>
  );
}
