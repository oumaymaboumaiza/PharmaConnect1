export default function PharmacyCard({ pharmacy }) {
    return (
      <div className="pharmacy-card">
        <h3>{pharmacy.name}</h3>
        <p>{pharmacy.address}</p>
      </div>
    );
  }

  