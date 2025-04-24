import { useState, useEffect } from 'react';

export function usePharmacies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPharmacies = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/pharmacies`);
      if (!res.ok) throw new Error("Erreur réseau");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPharmacies();
  }, []);

  return { data, loading, error, refetch: fetchPharmacies };
}
