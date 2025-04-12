import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PharmacyListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie l'authentification côté client
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/login');
    }
  }, []);

  const pharmacies = JSON.parse(localStorage.getItem('pharmacies')) || [];

  return (
    <div>
      <h2>Liste des Pharmacies</h2>
      <ul>
        {pharmacies.map(pharmacy => (
          <li key={pharmacy.id}>
            <h3>{pharmacy.name}</h3>
            <p>{pharmacy.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PharmacyListPage;  