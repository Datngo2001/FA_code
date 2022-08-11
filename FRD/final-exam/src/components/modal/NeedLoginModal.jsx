import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';

function NeedLoginModalContent({ show, handleClose }) {
  const navigate = useNavigate();
  return (
    <Modal show={show}>
      <Modal.Body>You need to login to view full idea content</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigate('/login');
          }}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function NeedLoginModal({ show, ...rest }) {
  return ReactDOM.createPortal(
    <NeedLoginModalContent show={show} {...rest}></NeedLoginModalContent>,
    document.getElementById('root-modal')
  );
}
