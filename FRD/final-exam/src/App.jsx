import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import {
  SIGNIN_REQUEST,
  REGISTER_REQUEST,
  RESTORE_USER
} from './store/reducer/user/userActionTypes';
import './App.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const App = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user) {
    const prevUser = cookies.get('user');
    if (prevUser) {
      dispatch({ type: RESTORE_USER, payload: prevUser });
    }
  }

  const handleLogin = (data) => {
    dispatch({ type: SIGNIN_REQUEST, payload: data });
  };
  const handleRegister = (data) => {
    dispatch({ type: REGISTER_REQUEST, payload: data });
  };

  return (
    <div>
      {user && user.email}
      <hr />
      <LoginForm handleSubmit={handleLogin} isLoading={loading}></LoginForm>
      <hr />
      <RegisterForm handleSubmit={handleRegister} isLoading={loading}></RegisterForm>
    </div>
  );
};

export default App;
