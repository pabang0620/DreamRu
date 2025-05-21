import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: '전체' },
    { id: 'fortune', name: '사주' },
    { id: 'tarot', name: '타로' },
    { id: 'consultation', name: '상담' },
    { id: 'free', name: '무료' },
    { id: 'sale', name: '할인' }
  ];

  // 임시 검색 결과 데이터
  const searchResults = [
    {
      id: 1,
      title: '2024 운세 풀이',
      category: '사주',
      price: '50,000원',
      icon: 'star'
    },
    {
      id: 2,
      title: '연애 타로 상담',
      category: '타로',
      price: '35,000원',
      icon: 'heart'
    },
    {
      id: 3,
      title: '심리 상담',
      category: '상담',
      price: '45,000원',
      icon: 'comments'
    }
  ];

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-tags">
          {filters.map((filter) => (
            <div
              key={filter.id}
              className={`filter-tag ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </div>
          ))}
        </div>
      </div>

      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-image">
              <FontAwesomeIcon icon={result.icon} size="2x" />
            </div>
            <div className="result-content">
              <h3 className="result-title">{result.title}</h3>
              <p className="result-category">{result.category}</p>
              <p className="result-price">{result.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
