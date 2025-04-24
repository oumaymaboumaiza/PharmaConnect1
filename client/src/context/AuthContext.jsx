import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ NEW
  const navigate = useNavigate();

  // 1. Vérification de l'authentification au montage
  useEffect(() => {
    const storedUser = localStorage.getItem('pharmaConnectUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // 2. Login amélioré
  const login = async (credentials) => {
    try {
      setError(null); // ✅ reset previous error
      const mockUser = {
        email: credentials.emailOrPhone,
        token: 'mock-token-' + Date.now()
      };

      setUser(mockUser);
      localStorage.setItem('pharmaConnectUser', JSON.stringify(mockUser));
      navigate('/dashboard');
    } catch (err) {
      setError(new Error('Identifiants incorrects')); // ✅ set new error
    }
  };

  // 3. Ajout du logout
  const logout = () => {
    setUser(null);
    setError(null); // ✅ Nettoyer les erreurs
    localStorage.removeItem('pharmaConnectUser');
    navigate('/login');
  };
  

  // 4. Valeur du contexte
  const value = {
    user,
    isLoading,
    error,     // ✅ Add error here
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}
