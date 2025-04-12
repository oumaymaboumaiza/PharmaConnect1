const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route test
app.get('/api/test', (req, res) => {
  try {
    res.json({ message: "API fonctionne!" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint non trouvé" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});