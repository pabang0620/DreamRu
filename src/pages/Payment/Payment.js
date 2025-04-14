import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, customerName } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // 모의 결제 처리 (2초 후 완료)
    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/tarot-reading/${product.id}`, {
        state: { product, customerName }
      });
    }, 2000);
  };

  if (!product || !customerName) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="payment-container">
      <h1>결제하기</h1>
      
      <div className="payment-details">
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">{new Intl.NumberFormat('ko-KR').format(product.price)}원</p>
        </div>

        <div className="customer-info">
          <p><strong>이름:</strong> {customerName}</p>
        </div>

        <div className="payment-summary">
          <h3>결제 금액</h3>
          <div className="total-amount">
            <span>총 금액</span>
            <span className="price">{new Intl.NumberFormat('ko-KR').format(product.price)}원</span>
          </div>
        </div>

        <button 
          className={`payment-button ${isProcessing ? 'processing' : ''}`}
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? '결제 처리중...' : '결제하기'}
        </button>
      </div>
    </div>
  );
};

export default Payment;
