import { useNavigate, useParams } from "react-router-dom";
import { calculateADHDResult, calculateMBTIResult } from "../../utils/psychology/psychologyResultUtils";
import { useState, useMemo } from "react";
import { psychologyTests } from "../../utils/psychology/psychology";
import "./TestRunner.css";

export default function TestRunner() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = psychologyTests[testId];
  const [answers, setAnswers] = useState({});

  const progress = useMemo(() => {
    const total = test.questions.length;
    const answered = Object.keys(answers).length;
    return Math.round((answered / total) * 100);
  }, [answers, test.questions.length]);

  // 1. 답안 저장: 선택한 옵션의 index 저장
  const handleAnswer = (qId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  // 3. 결과 계산 시 value 추출 방식 변경
  const handleSubmit = () => {
    const convertedAnswers = {};

    // 선택값 정리 (MBTI는 value, ADHD는 score 기반)
    Object.entries(answers).forEach(([qId, selectedIndex]) => {
      const question = test.questions.find((q) => q.id === Number(qId));
      const option = question?.options?.[selectedIndex];

      if (testId === "mbti") {
        convertedAnswers[qId] = option?.value ?? "";
      } else if (testId === "adhd") {
        convertedAnswers[qId] = option?.score ?? 0;
      }
    });

    let result = null;

    if (testId === "mbti") {
      result = calculateMBTIResult(convertedAnswers, test.questions);
    } else if (testId === "adhd") {
      result = calculateADHDResult(convertedAnswers, test.questions);
    }

    // 자동으로 해당 경로로 이동
    if (result) {
      navigate(`/psychology/${testId}/result`, {
        state: { result },
      });
    }
  };

  return (
    <div className="test-runner" style={{ borderColor: test.color }}>
      <div className="test-progress-wrapper">
        <div className="test-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="test-title">{test.title}</h2>
      <div className="test-questions">
        {test.questions.map((q) => (
          <div key={q.id} className="test-question">
            <p className="test-question-text">{q.text}</p>
            <div className="test-options">
              {/* // 2. 버튼에 selected 클래스 조건 변경 */}
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
