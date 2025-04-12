import { useEffect, useState } from 'react';
import pharmacyService from '../services/pharmacyService';

export function usePharmacies() {
  const [pharmacies, setPharmacies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Corrigé la faute de frappe (isloading → isLoading)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const data = await pharmacyService.getAll();
        setPharmacies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Corrigé setLoading → setIsLoading
      }
    };
    fetchPharmacies();
  }, []);

  return { data: pharmacies, isLoading, error };
}