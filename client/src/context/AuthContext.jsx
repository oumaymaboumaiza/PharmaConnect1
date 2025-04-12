// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Créez le contexte
const AuthContext = createContext();

// 2. Créez le Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      // Simulation de connexion réussie
      setUser({ email: credentials.emailOrPhone });
      navigate('/dashboard');
    } catch (error) {
      throw new Error('Identifiants incorrects');
    }
  };

  const value = { user, login };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Créez le hook personnalisé
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}