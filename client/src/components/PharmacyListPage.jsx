import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
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
        const response = await fetch("http://localhost:3001/api/pharmacies");
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

  if (isLoading) return <div className="p-6 text-center">Chargement en cours...</div>;
  if (error) return <div className="p-6 text-red-500">Erreur : {error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Liste des pharmacies</h1>
        <Input 
          placeholder="Rechercher..." 
          className="max-w-md" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card 
          className="flex flex-col items-center justify-center border-2 border-dashed border-green-400 p-6 cursor-pointer hover:bg-green-50 transition-colors"
          onClick={() => navigate("/pharmacies/new")}
        >
          <PlusCircle className="h-12 w-12 text-green-600 mb-4" />
          <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
            Ajouter une pharmacie
          </Button>
        </Card>

        {filteredPharmacies.map((pharmacy) => (
          <Card key={pharmacy.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <div>
                  <h2 className="font-semibold">{pharmacy.name}</h2>
                  <p className="text-sm text-gray-500 truncate">
                    {pharmacy.address}
                  </p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p><strong>Téléphone :</strong> {pharmacy.phone || "Non renseigné"}</p>
                <p><strong>Horaires :</strong> {pharmacy.hours || "9h-18h"}</p>
                <p><strong>Responsable :</strong> {pharmacy.manager || "Non spécifié"}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}