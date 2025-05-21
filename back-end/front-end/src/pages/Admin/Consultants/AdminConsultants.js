import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminConsultants.css';

const AdminConsultants = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [deleteLogs, setDeleteLogs] = useState([]);
  const [consultants, setConsultants] = useState([
    {
      id: 1,
      name: '김도사',
      field: '사주',
      experience: '15년',
      description: '정통 사주로 운세를 봐드립니다.',
      image: null
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingConsultant, setEditingConsultant] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    experience: '',
    description: '',
    image: null
  });

  const handleOpenModal = (consultant = null) => {
    if (consultant) {
      setFormData(consultant);
      setEditingConsultant(consultant);
    } else {
      setFormData({
        name: '',
        field: '',
        experience: '',
        description: '',
        image: null
      });
      setEditingConsultant(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingConsultant(null);
    setFormData({
      name: '',
      field: '',
      experience: '',
      description: '',
      image: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    if (editingConsultant) {
      // 수정
      setConsultants(prev =>
        prev.map(c =>
          c.id === editingConsultant.id
            ? { ...formData, id: c.id }
            : c
        )
      );
    } else {
      // 추가
      setConsultants(prev => [
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
    const itemsToDelete = consultants.filter(c => idsArray.includes(c.id));
    
    if (window.confirm(`선택한 ${idsArray.length}개의 항목을 삭제하시겠습니까?`)) {
      // 삭제 로그 추가
      const now = new Date();
      const newLogs = itemsToDelete.map(item => ({
        id: Date.now(),
        type: '상담사',
        name: item.name,
        deletedAt: now.toLocaleString(),
      }));
      setDeleteLogs(prev => [...newLogs, ...prev]);

      // 상담사 삭제
      setConsultants(prev => prev.filter(c => !idsArray.includes(c.id)));
      setSelectedItems([]);
    }
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
        <h1 className="admin-title">상담사 관리</h1>
        <div className="header-actions">
          <button className="add-button" onClick={() => handleOpenModal()}>
            상담사 추가
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

      <div className="consultants-grid">
        {consultants.map(consultant => (
          <div key={consultant.id} className={`consultant-card ${selectedItems.includes(consultant.id) ? 'selected' : ''}`}>
            <div className="card-checkbox">
              <input
                type="checkbox"
                checked={selectedItems.includes(consultant.id)}
                onChange={() => toggleSelection(consultant.id)}
              />
            </div>
            <div className="consultant-image">
              {consultant.image ? (
                <img src={consultant.image} alt={consultant.name} />
              ) : (
                <FontAwesomeIcon icon="user" size="3x" />
              )}
            </div>
            <div className="consultant-info">
              <h3>{consultant.name}</h3>
              <p className="consultant-field">
                {consultant.field} · {consultant.experience}
              </p>
              <p>{consultant.description}</p>
            </div>
            <div className="consultant-actions">
              <button
                className="action-button edit-button"
                onClick={() => handleOpenModal(consultant)}
              >
                수정
              </button>
              <button
                className="action-button delete-button"
                onClick={() => handleDelete(consultant.id)}
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
                {editingConsultant ? '상담사 수정' : '상담사 추가'}
              </h2>
              <button className="close-button" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">이름</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">전문 분야</label>
                <input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">경력</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">소개</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">프로필 이미지</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-button">
                {editingConsultant ? '수정하기' : '추가하기'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminConsultants;
