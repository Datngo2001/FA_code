import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RESTORE_USER } from './store/reducer/user/userActionTypes';
import './App.css';
import Cookies from 'universal-cookie';
import NavigationBar from './layout/NavigationBar/NavigationBar';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import IdeaDetail from './pages/IdeaDetail/IdeaDetail';

const cookies = new Cookies();

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user) {
    const prevUser = cookies.get('user');
    if (prevUser) {
      dispatch({ type: RESTORE_USER, payload: prevUser });
    }
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="app-route-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/ideas/:id"
            element={
              <ProtectedRoute condition={user}>
                <IdeaDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute condition={user}>
                <IdeaDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
