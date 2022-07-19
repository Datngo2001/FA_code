import styles from './app.module.css';
import Todo from './components/Todo/Todo';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  return (
    <div className={styles["app-container"]}>
      <div className={styles["todo-container"]}>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
