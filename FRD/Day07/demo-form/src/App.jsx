import styles from "./app.module.css";
import SigninForm from "./components/SigninForm/SigninForm";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <div className={styles.app}>
      <h2>Sign up</h2>
      <SignupForm></SignupForm>
      <h2>Sign in</h2>
      <SigninForm></SigninForm>
    </div>
  );
}

export default App;
