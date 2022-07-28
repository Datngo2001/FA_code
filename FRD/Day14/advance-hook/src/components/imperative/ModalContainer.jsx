import React, { useImperativeHandle, useRef } from "react";
import Modal from "./Modal";

function ModalContainer() {
  const modalRef = useRef();
  return (
    <div>
      <button onClick={() => modalRef.current.focusEmail()}>Focus Email</button>
      <button onClick={() => modalRef.current.focusPassword()}>
        Focus Password
      </button>
      <Modal ref={modalRef}></Modal>
    </div>
  );
}

export default ModalContainer;
