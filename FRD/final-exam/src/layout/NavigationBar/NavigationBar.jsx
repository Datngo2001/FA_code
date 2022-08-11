import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { LOGOUT } from '../../store/reducer/user/userActionTypes';
import styles from './nav.module.css';

function NavigationBar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    });
  };

  return (
    <Navbar bg="light">
      <div className={styles['nav-container']}>
        <Navbar.Brand href="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className={styles['link-container']}>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink to="/" className="px-2">
              Home
            </NavLink>
          </Nav>
          {user ? (
            <div>
              <span className={styles['email']}>{user.email}</span>
              <Button variant="outline-primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline-success">Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
