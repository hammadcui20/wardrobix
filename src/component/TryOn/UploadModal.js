import React from 'react';
import './UploadModal.css'; // Import the CSS file for styling

const UploadModal = ({ handleUserImageChange, handleSubmit, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Upload Your Image</h5>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <input type="file" accept="image/*" onChange={handleUserImageChange} />
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
