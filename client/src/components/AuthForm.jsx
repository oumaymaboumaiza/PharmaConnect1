import React, { useState } from 'react';

import { 
  CssBaseline,
  Box, // Un seul import de Box
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Tabs,
  Tab,
  Divider
} from '@mui/material'; // Un seul import général

export default function AuthForm() {
  const [tabValue, setTabValue] = useState(0);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    // Ajoutez votre logique de connexion ici
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
    // Ajoutez votre logique d'inscription ici
  };

  return (
    <Box component="div" sx={{ mt: 2 }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Sign in" />
        <Tab label="Create Account" />
      </Tabs>

      <Divider sx={{ my: 3 }} />

      {tabValue === 0 ? (
        /* Formulaire de Connexion */
        <Box component="form" onSubmit={handleLoginSubmit}>
          <TextField
            fullWidth
            label="Email or Phone Number"
            variant="outlined"
            sx={{ mb: 3 }}
            value={loginData.email}
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
            value={loginData.password}
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
          />

          <Box sx={{ textAlign: 'right', mb: 3 }}>
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#000DFF',
              '&:hover': { bgcolor: '#0000CC' },
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Sign In
          </Button>
        </Box>
      ) : (
        /* Formulaire d'Inscription */
        <Box component="form" onSubmit={handleSignupSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            sx={{ mb: 3 }}
            value={signupData.name}
            onChange={(e) => setSignupData({...signupData, name: e.target.value})}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            sx={{ mb: 3 }}
            value={signupData.email}
            onChange={(e) => setSignupData({...signupData, email: e.target.value})}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 3 }}
            value={signupData.password}
            onChange={(e) => setSignupData({...signupData, password: e.target.value})}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{ mb: 3 }}
            value={signupData.confirmPassword}
            onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#000DFF',
              '&:hover': { bgcolor: '#0000CC' },
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Create Account
          </Button>
        </Box>
      )}
    </Box>
  );
}