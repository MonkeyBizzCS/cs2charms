import React from 'react';
import '../Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You are officially a degenerate.</p>
        <button className="close-button" onClick={onClose}>Okay, I accept my fate</button>
      </div>
    </div>
  );
};

export default Modal;
