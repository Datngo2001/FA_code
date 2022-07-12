import { useState } from 'react';
import Modal from './components/Modal/Modal';
import styles from './app.module.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(() => true)
  }

  function closeModal() {
    setIsOpen(() => false)
  }

  return (
    <div className={styles.app}>
      <h1>Welcome to react portals!</h1>
      <button onClick={openModal}> Open modal </button>
      {isOpen ? (
        <Modal close={closeModal} title={"Login"}></Modal>
      ) : <></>}
    </div>
  );
}

export default App;
