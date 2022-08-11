import React, { useState } from 'react';

function RegisterForm({ handleSubmit, isLoading }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
        <input
          name="email"
          type="text"
          className="form-control"
          id="emailInput"
          value={inputs.email || ''}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="passwordInput"
          value={inputs.password || ''}
          onChange={handleChange}
        />
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      )}
    </form>
  );
}

export default RegisterForm;
