import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const Products = React.lazy(() => import("./pages/Products/Products"));

  const handleLogin = () => {
    setIsLogin((v) => !v);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute condition={isLogin} redirectPath="/login">
              <Profile></Profile>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login isLogin={isLogin} handleLogin={handleLogin}></Login>}
        ></Route>
        <Route
          path="/products"
          element={
            <React.Suspense fallback={"..."}>
              <Products></Products>
            </React.Suspense>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
