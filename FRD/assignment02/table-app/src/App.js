import styles from './app.module.css'
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <div className={styles.container} >
      <UserTable></UserTable>
    </div>
  );
}

export default App;
