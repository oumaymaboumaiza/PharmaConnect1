import React from 'react';
import './Login.css'; 


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulaire soumis');
  };
  return (
    <div className="login-wrapper">
      <div className="left-side">
        <h1>PharmaConnect</h1>
        <p className="slogan">L'innovation au service des pharmacies pour une gestion sans faille</p>
      </div>
  
      <div className="right-side">
        <div className="login-form">
          <h2>Sign in</h2>
  
          {error && <div className="error-message">{error}</div>}
  
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter your mobile number or email ID</label>
              <input
                type="text"
                name="emailOrPhone"
                value={credentials.emailOrPhone}
                onChange={handleChange}
                placeholder="Mobile number or email ID"
                required
              />
            </div>
  
            <div className="form-group">
              <label>Enter your Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                required
                minLength="6"
              />
            </div>
  
            <div className="form-options">
              <a href="/reset-password" className="reset-link">Reset Password</a>
            </div>
  
            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )};
  