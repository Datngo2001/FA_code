import './App.css';
import styled, { keyframes } from "styled-components"
import Counter from './components/Counter/Counter';
import LoadingButton from './components/LoadingButton';

const keyframe = keyframes`
  0%{
    background-color: lightblue;
  }

  50%{
    background-color: green;
  }

  100%{
    background-color: red;
  }
`

const RedButton = styled.button`
  background-color: red;
  &:hover{
    background-color: green;
  }
  animation: ${keyframe} 2s infinite;
`

function App() {
  return (
    <LoadingButton>Click here</LoadingButton>
  );
}

export default App;
