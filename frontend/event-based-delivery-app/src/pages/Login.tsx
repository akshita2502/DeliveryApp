import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBirthdayCake } from 'react-icons/fa';
import './Auth.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic here
    console.log('Login attempt:', formData);
    
    // For now, redirect to home on success
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <FaBirthdayCake className="auth-logo" />
        <h1 className="auth-title">Welcome Back!</h1>
        <p className="auth-subtitle">Login to access your event dashboard</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="identifier">Username or Email</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              placeholder="Enter your username or email"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <div className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register" className="auth-link">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;