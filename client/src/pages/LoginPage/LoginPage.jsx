import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';


const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(credentials);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Échec de la connexion');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>PharmaConnect</h1>
        <div className="taglines">
          <p>L'innovation au service des pharmacies pour une gestion sans faille</p>
          <p className="welcome">welcome to PharmaConnect</p>
        </div>
      </div>

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
              placeholder="mobile number or email ID"
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
  );
};

export default LoginPage;