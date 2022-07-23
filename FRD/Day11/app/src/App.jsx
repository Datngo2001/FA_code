import { useSelector } from "react-redux";
import Todo from "./components/Todo";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import styles from "./app.module.css";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles["app-container"]}>
      <NavigationBar />
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route
          path="/todo"
          element={
            <ProtectedRoute condition={user} redirectPath="/">
              <Todo></Todo>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
