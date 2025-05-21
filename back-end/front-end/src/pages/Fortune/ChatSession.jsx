import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./chatSession.css";

// 상담사 데이터 모듈 import (alias로 구분)
import * as Dae from "../../utils/Dae";
import * as Do from "../../utils/Do";
import * as Hae from "../../utils/Hae";
import * as Ji from "../../utils/Ji";
import * as Mi from "../../utils/Mi";
import * as Sa from "../../utils/Sa";

const ChatSession = () => {
  const location = useLocation();
  const { teacherId = "Dae" } = location.state || {}; // 기본값: 대용

  // 상담사 데이터 매핑
  const dataMap = { Dae, Do, Hae, Ji, Mi, Sa };
  const teacherData = dataMap[teacherId] || Dae;
  const introMessages = teacherData.introMessages;
  const mindmapTree = teacherData.mindmapTree;

  const teacherNameMap = {
    Dae: "이대용 상담사",
    Do: "최도경 상담사",
    Hae: "김명숙 상담사",
    Ji: "지영언니 상담사",
    Mi: "조예린 상담사",
    Sa: "김주하 상담사",
  };
  const teacherName = teacherNameMap[teacherId] || "이대용 상담사";

  // 상태 변수
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [customInputMode, setCustomInputMode] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentNode, setCurrentNode] = useState(null);
  const [nodeHistory, setNodeHistory] = useState([]);
  const MAX_QUESTIONS = 3;

  const bottomRef = useRef(null);

  // 답변 텍스트 자르기
  const splitReply = (text, maxLength = 70) => {
    const chunks = [];
    let remaining = text.trim();
    while (remaining.length > maxLength) {
      const slice = remaining.slice(0, maxLength + 1);
      const lastPeriod = slice.lastIndexOf(".");
      let cutIndex = lastPeriod !== -1 ? lastPeriod + 1 : maxLength;
      chunks.push(remaining.slice(0, cutIndex).trim());
      remaining = remaining.slice(cutIndex).trim();
    }
    if (remaining) chunks.push(remaining);
    return chunks;
  };

  const getMindmapOptions = (node) => {
    if (!node?.children) return [];
    return Object.entries(node.children).map(([id, value]) => ({
      id,
      ...value,
    }));
  };

  const rootOptions = Object.entries(mindmapTree).map(([id, value]) => ({
    id,
    ...value,
  }));

  // 소개 메시지 출력
  useEffect(() => {
    let i = 0;
    const showIntro = () => {
      if (i >= introMessages.length) {
        setShowOptions(true);
        return;
      }
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: introMessages[i] },
        ]);
        setIsTyping(false);
        i++;
        showIntro();
      }, Math.random() * 1000 + 1200);
    };
    showIntro();
  }, [introMessages]);

  // 메시지 변경 시 자동 스크롤
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const addBotMessageWithTyping = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false);
    }, Math.random() * 1200 + 1200);
  };

  const handleOptionClick = (text, selectedNode = null) => {
    if (text === "직접 쓰기") {
      setCustomInputMode(true);
      setShowOptions(false);
      return;
    }
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setShowOptions(false);

    if (selectedNode) {
      setIsTyping(true);
      setNodeHistory((prev) => [...prev, selectedNode]);
      setCurrentNode(selectedNode);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: selectedNode.답변 },
        ]);
        setShowOptions(true);
      }, Math.max(800, Math.min(3000, selectedNode.답변.length * 30)));
    } else {
      addBotMessageWithTyping(`그래그래~ "${text}" 그 얘기부터 해보자꾸나.`);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || questionCount >= MAX_QUESTIONS) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setQuestionCount((prev) => prev + 1);
    setIsTyping(true);
    try {
      const res = await axios.post("/api/chat", { message: userMessage });
      const reply =
        res.data.reply || "음~ 그건 이 할미가 좀 더 살펴봐야겠구나.";
      const replyChunks = splitReply(reply, 70);
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      (async () => {
        for (const chunk of replyChunks) {
          addBotMessageWithTyping(chunk);
          await delay(Math.random() * 2000 + 3000);
        }
      })();
    } catch (err) {
      console.error("API 오류:", err);
      addBotMessageWithTyping(
        "아이고, 문제가 생긴 것 같구나. 이 할미가 다시 확인해볼게~"
      );
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
    setIsTyping(false);
    setCustomInputMode(false);
    setQuestionCount(0);
    setShowOptions(true);
    setCurrentNode(null);
    setNodeHistory([]);
  };

  const mindmapOptions = currentNode
    ? getMindmapOptions(currentNode)
    : rootOptions;

  return (
    <div className="chat-session-container">
      <div className="chat-session-header">{teacherName}와의 상담</div>

      <div className="chat-session-messages">
        {messages
          .filter((msg) => msg?.text?.trim())
          .map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        {isTyping && (
          <div className="chat-bubble bot typing-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {showOptions && (
          <div className="chat-options">
            {mindmapOptions.map((opt) => (
              <button
                key={opt.id}
                className="chat-option-btn"
                onClick={() => handleOptionClick(opt.질문, opt)}
              >
                {opt.질문}
              </button>
            ))}
            <button
              className="chat-option-btn"
              onClick={() => handleOptionClick("직접 쓰기")}
            >
              직접 쓰기
            </button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {customInputMode && questionCount < MAX_QUESTIONS && (
        <div className="chat-session-input-area">
          <div className="chat-input-wrap">
            <input
              type="text"
              placeholder="궁금한 점을 입력해보세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <div className="chat-question-inline-count">
              남은 질문 {MAX_QUESTIONS - questionCount}회
            </div>
          </div>
          <button onClick={handleSend}>전송</button>
          <div className="chat-question-count">
            질문 가능 횟수: {MAX_QUESTIONS - questionCount} / {MAX_QUESTIONS}
          </div>
        </div>
      )}

      {questionCount >= MAX_QUESTIONS && (
        <div className="chat-session-limit-msg">
          더 이상 질문하실 수 없어요.
        </div>
      )}
    </div>
  );
};

export default ChatSession;
