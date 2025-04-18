import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import TarotResult from "./TarotResult";

const TarotResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cards, type, fromTarotReading } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cards || !type) {
      // 잘못된 접근 시 타로 리딩으로 리다이렉트
      navigate("/tarotreading", { replace: true });
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [cards, type, navigate]);

  if (!cards || !type) return null;

  return loading ? (
    <Spinner />
  ) : (
    <TarotResult cards={cards} type={type} />
  );
};

export default TarotResultPage;
