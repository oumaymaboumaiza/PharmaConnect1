// db.js
const mysql = require('mysql2/promise');  // Version promisifiée

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Remplacez par votre utilisateur MySQL
  password: '',  // Mot de passe MySQL
  database: 'pharmaconnect',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;