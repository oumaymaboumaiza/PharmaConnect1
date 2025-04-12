import { useAuth } from '../context/AuthContext';
import { usePharmacies } from '../hooks/usePharmacies';
import PharmacyCard from '../components/pharmacies/PharmacyCard';

export default function DashboardPage() {
  const { user } = useAuth();
  const { data: pharmacies, isLoading, error } = usePharmacies();

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div className="dashboard-container">
      <h1>Bienvenue, {user?.name}</h1>
      <h2>Vos pharmacies</h2>
      
      <div className="pharmacies-grid">
        {pharmacies?.map(pharmacy => (
          <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
        ))}
      </div>
    </div>
  );
}