import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { PlusCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PharmacyListPage() {
  const [pharmacies, setPharmacies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPharmacies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pharmacies`);
        if (!response.ok) throw new Error("Erreur réseau");
        const data = await response.json();
        setPharmacies(data);
      } catch (error) {
        setError(error.message);
        console.error("Erreur:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPharmacies();
  }, []);

  const filteredPharmacies = pharmacies.filter(pharmacy =>
    pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pharmacy.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Erreur de chargement</h3>
          <p className="text-sm text-red-700">{error}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestion des pharmacies</h1>
        
        <div className="w-full sm:w-auto flex flex-col-reverse sm:flex-row gap-3">
          <Input
            placeholder="Rechercher une pharmacie..."
            className="w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            onClick={() => navigate("/pharmacies/new")}
            className="flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Nouvelle pharmacie</span>
          </Button>
        </div>
      </div>

      {filteredPharmacies.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">Aucune pharmacie trouvée</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPharmacies.map((pharmacy) => (
            <Card key={pharmacy.id} className="hover:shadow-md transition-shadow h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mt-1">
                    {pharmacy.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg leading-tight">{pharmacy.name}</h2>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {pharmacy.address}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-700">Téléphone:</p>
                    <p>{pharmacy.phone || "Non renseigné"}</p>
                  </div>

                  <div className="text-sm">
                    <p className="font-medium text-gray-700">Horaires:</p>
                    <p>{pharmacy.hours || "9h-18h"}</p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => navigate(`/pharmacies/${pharmacy.id}`)}
                  >
                    Voir fiche complète
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}