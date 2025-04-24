const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // autoriser le frontend
app.use(express.json());

// Données mockées
const pharmacies = [
  {
    id: 1,
    name: "Pharmacie Centrale",
    address: "123 Rue de la Santé",
    phone: "70 000 000",
    hours: "8h - 18h"
  },
  {
    id: 2,
    name: "Pharmacie el Amen",
    address: "Avenue Habib Bourguiba",
    phone: "71 111 111",
    hours: "9h - 19h"
  }
];

// Route API
app.get('/api/pharmacies', (req, res) => {
  res.json(pharmacies);
});

// Définir la route pour '/'
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend de PharmaConnect');
});


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
