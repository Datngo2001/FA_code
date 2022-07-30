import { useRef, useEffect } from 'react'
import './App.css';
import ProductPage from './components/callback/ProductPage';
import ModalContainer from './components/imperative/ModalContainer';
import InputTheme from './components/memo/InputTheme';
import Counter from './components/Ref/Counter';
import CustomInput from './components/Ref/CustomInput'
import FancyInput from './components/Ref/FancyInput';

function App() {
  // const refInput = useRef();
  // useEffect(() => {
  //   refInput.current.focus();
  // }, []);
  return (
    <div className='App'>
      {/* <Counter></Counter> */}
      {/* <CustomInput></CustomInput> */}
      {/* <FancyInput ref={refInput}></FancyInput> */}
      {/* <InputTheme></InputTheme> */}
      <ProductPage></ProductPage>
      {/* <ModalContainer></ModalContainer> */}
    </div>
  );
}

export default App;
