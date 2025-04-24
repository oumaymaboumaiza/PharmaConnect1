import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  CssBaseline,
  Box, 
  Container,
  TextField,
  Button,
  Link,
  Tabs,
  Tab,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';

export default function AuthForm() {
  const [tabValue, setTabValue] = useState(0);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login(loginData.email, loginData.password);
      const from = location.state?.from || '/dashboard';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      return setError('Passwords do not match');
    }
    
    setLoading(true);
    setError('');
    
    try {
      await signup(signupData.email, signupData.password, signupData.name);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Sign in" />
          <Tab label="Create Account" />
        </Tabs>

        <Divider sx={{ my: 3 }} />

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {tabValue === 0 ? (
          <Box component="form" onSubmit={handleLoginSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              autoComplete="email"
              autoFocus
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              autoComplete="current-password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            />

            <Box sx={{ textAlign: 'right', mb: 2 }}>
              <Link href="#" underline="hover">
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: '#000DFF',
                '&:hover': { bgcolor: '#0000CC' },
                py: 1.5,
                borderRadius: 2,
                mb: 2
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSignupSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
              autoComplete="name"
              autoFocus
              value={signupData.name}
              onChange={(e) => setSignupData({...signupData, name: e.target.value})}
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              autoComplete="email"
              value={signupData.email}
              onChange={(e) => setSignupData({...signupData, email: e.target.value})}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={signupData.password}
              onChange={(e) => setSignupData({...signupData, password: e.target.value})}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: '#000DFF',
                '&:hover': { bgcolor: '#0000CC' },
                py: 1.5,
                borderRadius: 2,
                mt: 2
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}