import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route path="*" index element={<HomePage></HomePage>}></Route>
      <Route path="users/:userId" element={<UserPage></UserPage>}></Route>
      <Route path="posts/:postId" element={<PostPage></PostPage>}></Route>
    </Routes>
  );
}

export default App;
