import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { psychologyTests } from "../../utils/psychology/psychology";
import { calculateIdealTypeResult } from "../../utils/psychology/psychologyResultUtils";

import "./DualOptionTestRunner.css";

export default function DualOptionTestRunner() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {};

  const test = psychologyTests[testId];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = test.questions[currentIndex];
  const total = test.questions.length;

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };
    setAnswers(newAnswers);

    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const result = calculateIdealTypeResult(newAnswers);
      navigate(`/psychology/${testId}/result`, {
        state: { result, name },
      });
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const progress = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="dual-test-runner" style={{ borderColor: test.color }}>
      <div className="dual-test-progress-wrapper">
        <div
          className="dual-test-progress-bar"
          style={{ width: `${progress}%`, backgroundColor: test.color }}
        />
      </div>

      <h2 className="dual-test-title">{test.title}</h2>

      {name && (
        <p className="dual-test-welcome">
          👇 아래 항목 중 {name}님의 <br />
          선택과 가장 가까운 것을 골라주세요!
        </p>
      )}

      <div className="dual-test-question">
        <p className="dual-test-question-text">{currentQuestion.text}</p>
        <div className="dual-test-options dual">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className="dual-test-option-btn"
              onClick={() => handleAnswer(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="dual-test-nav-info">
        <button
          className="prev-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ← 이전 질문
        </button>
      </div>
      </div>
      
    </div>
  );
}
