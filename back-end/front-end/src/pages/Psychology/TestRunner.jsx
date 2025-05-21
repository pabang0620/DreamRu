import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  calculateADHDResult,
  calculateDepressionResult,
  calculateMBTIResult,
  calculateStressResult,
  calculateTravelResult,
} from "../../utils/psychology/psychologyResultUtils";
import { useState, useMemo } from "react";
import { psychologyTests } from "../../utils/psychology/psychology";
import "./TestRunner.css";

export default function TestRunner() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {}; // 이름 받기

  const test = psychologyTests[testId];
  const [answers, setAnswers] = useState({});

  const progress = useMemo(() => {
    const total = test.questions.length;
    const answered = Object.keys(answers).length;
    return Math.round((answered / total) * 100);
  }, [answers, test.questions.length]);

  const handleAnswer = (qId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const handleSubmit = () => {
    const convertedAnswers = {};

    Object.entries(answers).forEach(([qId, selectedIndex]) => {
      const question = test.questions.find((q) => q.id === Number(qId));
      const option = question?.options?.[selectedIndex];

      if (testId === "mbti") {
        convertedAnswers[qId] = option?.value ?? "";
      } else if (["adhd", "depression", "stress"].includes(testId)) {
        convertedAnswers[qId] = option?.score ?? 0;
      } else if (testId === "travel") {
        convertedAnswers[qId] = option?.value ?? "";
      }
    });

    let result = null;

    if (testId === "mbti") {
      result = calculateMBTIResult(convertedAnswers, test.questions);
    } else if (testId === "adhd") {
      result = calculateADHDResult(convertedAnswers, test.questions);
    } else if (testId === "depression") {
      result = calculateDepressionResult(convertedAnswers);
    } else if (testId === "travel") {
      result = calculateTravelResult(convertedAnswers);
    } else if (testId === "stress") {
      result = calculateStressResult(convertedAnswers);
    }

    if (result) {
      navigate(`/psychology/${testId}/result`, {
        state: { result, name }, // 이름도 함께 전달
      });
    }
  };

  return (
    <div className="test-runner" style={{ borderColor: test.color }}>
      <div className="test-progress-wrapper">
        <div className="test-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="test-title">{test.title}</h2>
      {name && (
        <p className="test-welcome">
          👇 아래 항목 중 {name}님의 <br /> 생각과 가장 가까운 답변을
          선택해주세요!
        </p>
      )}

      <div className="test-questions">
        {test.questions.map((q) => (
          <div key={q.id} className="test-question">
            <p className="test-question-text">{q.text}</p>
            <div className="test-options">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(q.id, i)}
                  className={`test-option-btn ${
                    answers[q.id] === i ? "selected" : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="test-submit-btn" onClick={handleSubmit}>
        결과 보기
      </button>
    </div>
  );
}
