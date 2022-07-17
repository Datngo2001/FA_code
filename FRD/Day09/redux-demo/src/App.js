import './App.css';
import Todo from './components/Todo';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  return (
    <div>
      <Todo></Todo>
    </div>
  );
}

export default App;
