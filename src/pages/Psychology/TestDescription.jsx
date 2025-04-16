import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TestDescription.css";
import { testDescriptions } from "../../utils/psychology/testDescriptions";

export default function TestDescription() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { testId } = useParams(); // ⬅️ 여기 추가

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStartTest = () => {
    if (!name.trim()) {
      alert("이름을 입력해 주세요.");
      return;
    }

    const isDualType = testId === "idealType"; // 또는 testConfigs[testId].type === 'dual'

    navigate(`/psychology/${testId}/${isDualType ? "dual-run" : "run"}`, {
      state: { name },
    });
  };

  return (
    <div className="test-description">
      <h2 className="test-description-title">테스트 시작 전 설명</h2>
      <p className="test-description-text">
        {testDescriptions[testId] ||
          "이 테스트는 당신의 심리 상태를 평가하기 위해 설계되었습니다."}
      </p>

      <div className="name-input-wrapper">
        <label htmlFor="name" className="name-input-label">
          이름을 입력해주세요
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="이름"
          className="name-input"
        />
      </div>

      <button className="test-start-btn" onClick={handleStartTest}>
        테스트 시작
      </button>
    </div>
  );
}
