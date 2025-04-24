// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',            
  password: '',           
  database: 'pharmaconnect' 
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.message);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});


module.exports = connection;
