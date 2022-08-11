import React from 'react';
import styles from './register.module.css';
import RegisterForm from '../../components/form/RegisterForm';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_REQUEST } from '../../store/reducer/user/userActionTypes';

function Register() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (user) {
    return <Navigate to={'/'}></Navigate>;
  }

  const handleLogin = (data) => {
    dispatch({ type: REGISTER_REQUEST, payload: data });
  };

  return (
    <div className={styles['container']}>
      <div className={styles['form-container']}>
        <h1>Register</h1>
        <RegisterForm handleSubmit={handleLogin} isLoading={loading}></RegisterForm>
        <p>
          Already had an account? <Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
