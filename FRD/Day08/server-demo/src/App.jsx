import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="*" index element={<HomePage></HomePage>}></Route>
      <Route path="users/:id" element={<UserPage></UserPage>}></Route>
    </Routes>
  );
}

export default App;
