import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminProducts.css';

const AdminProducts = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [deleteLogs, setDeleteLogs] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: '2024년 운세 풀이',
      category: '사주',
      price: 50000,
      description: '2024년 운세를 상세하게 풀이해드립니다.',
      consultant: '김도사',
      image: null,
      duration: 30
    }
  ]);

  const [consultants, setConsultants] = useState([
    { id: 1, name: '김도사', field: '사주' },
    { id: 2, name: '이타로', field: '타로' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    consultant: '',
    image: null,
    duration: ''
  });

  const categories = ['사주', '타로', '연애상담'];

  const handleOpenModal = (product = null) => {
    if (product) {
      setFormData(product);
      setEditingProduct(product);
    } else {
      setFormData({
        title: '',
        category: '',
        price: '',
        description: '',
        consultant: '',
        image: null,
        duration: ''
      });
      setEditingProduct(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({
      title: '',
      category: '',
      price: '',
      description: '',
      consultant: '',
      image: null,
      duration: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'duration' ? Number(value) : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // 수정
      setProducts(prev =>
        prev.map(p =>
          p.id === editingProduct.id
            ? { ...formData, id: p.id }
            : p
        )
      );
    } else {
      // 추가
      setProducts(prev => [
        ...prev,
        {
          ...formData,
          id: Date.now()
        }
      ]);
    }
    handleCloseModal();
  };

  const handleDelete = (ids) => {
    const idsArray = Array.isArray(ids) ? ids : [ids];
    const itemsToDelete = products.filter(p => idsArray.includes(p.id));
    
    if (window.confirm(`선택한 ${idsArray.length}개의 항목을 삭제하시겠습니까?`)) {
      // 삭제 로그 추가
      const now = new Date();
      const newLogs = itemsToDelete.map(item => ({
        id: Date.now(),
        type: '상품',
        name: item.title,
        price: formatPrice(item.price),
        deletedAt: now.toLocaleString(),
      }));
      setDeleteLogs(prev => [...newLogs, ...prev]);

      // 상품 삭제
      setProducts(prev => prev.filter(p => !idsArray.includes(p.id)));
      setSelectedItems([]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };

  const toggleSelection = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      handleDelete(selectedItems);
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1 className="admin-title">상품 관리</h1>
        <div className="header-actions">
          <button className="add-button" onClick={() => handleOpenModal()}>
            상품 추가
          </button>
          {selectedItems.length > 0 && (
            <button 
              className="delete-selected-button" 
              onClick={handleDeleteSelected}
            >
              선택 항목 삭제 ({selectedItems.length})
            </button>
          )}
        </div>
      </header>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className={`product-card ${selectedItems.includes(product.id) ? 'selected' : ''}`}>
            <div className="card-checkbox">
              <input
                type="checkbox"
                checked={selectedItems.includes(product.id)}
                onChange={() => toggleSelection(product.id)}
              />
            </div>
            <div className="product-image">
              {product.image ? (
                <img src={product.image} alt={product.title} />
              ) : (
                <FontAwesomeIcon icon="image" size="3x" />
              )}
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{formatPrice(product.price)}</p>
              <p className="product-consultant">상담사: {product.consultant}</p>
              <p className="product-duration">상담시간: {product.duration}분</p>
              <p>{product.description}</p>
            </div>
            <div className="product-actions">
              <button
                className="action-button edit-button"
                onClick={() => handleOpenModal(product)}
              >
                수정
              </button>
              <button
                className="action-button delete-button"
                onClick={() => handleDelete(product.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {deleteLogs.length > 0 && (
        <div className="delete-logs">
          <h2>삭제 기록</h2>
          <div className="logs-list">
            {deleteLogs.map(log => (
              <div key={log.id} className="log-item">
                <span className="log-type">{log.type}</span>
                <span className="log-name">{log.name}</span>
                <span className="log-price">{log.price}</span>
                <span className="log-date">{log.deletedAt}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">
                {editingProduct ? '상품 수정' : '상품 추가'}
              </h2>
              <button className="close-button" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">상품명</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">카테고리</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">카테고리 선택</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">가격 (원)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="form-input"
                  min="0"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">상담시간 (분)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="form-input"
                  min="1"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">상담사</label>
                <select
                  name="consultant"
                  value={formData.consultant}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">상담사 선택</option>
                  {consultants.map(consultant => (
                    <option key={consultant.id} value={consultant.name}>
                      {consultant.name} ({consultant.field})
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">상품 설명</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">상품 이미지</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-button">
                {editingProduct ? '수정하기' : '추가하기'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
