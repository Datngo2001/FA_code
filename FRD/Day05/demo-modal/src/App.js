import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(() => true)
  }

  function closeModal() {
    setIsOpen(() => false)
  }

  return (
    <div className="App">
      <button onClick={openModal} style={{ "marginTop": "100px" }}> Open modal </button>
      {isOpen ? (
        <Modal close={closeModal} title={"Login"}></Modal>
      ) : <></>}
    </div>
  );
}

export default App;
