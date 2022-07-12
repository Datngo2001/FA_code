import styles from "./app.module.css";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <div className={styles.app}>
      <h2>Sign up</h2>
      <SignupForm></SignupForm>
    </div>
  );
}

export default App;
