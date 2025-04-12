import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage'; // Créez ce fichier
import PharmacyListPage from './pages/PharmacyListPage'; // Existant
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
      
      <Route path="/pharmacies" element={
        <ProtectedRoute>
          <PharmacyListPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}
export default App;