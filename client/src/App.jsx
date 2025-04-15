import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PharmacyListPage from './ui/PharmacyListPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Contenu Principal</h1>
        {/* Votre contenu ici */}
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Route publique */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Routes protégées */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pharmacies" element={<PharmacyListPage />} />
      </Route>
      
      {/* Redirections */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
