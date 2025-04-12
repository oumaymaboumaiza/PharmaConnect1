import React from 'react';
import './Login.css'; // Nous créerons ce fichier CSS ensuite


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique de connexion
    console.log('Formulaire soumis');
  };

  return (
    <div className="login-container">
      {/* Section Gauche - Hero */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Pharmaconnect</h1>
          <p>L'innovation au service des pharmacies pour une gestion sans faille</p>
        </div>
      </div>

      {/* Section Droite - Formulaire */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Connexion</h2>
            <p>Accédez à votre espace professionnel</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email ou numéro de téléphone</label>
              <input
                type="text"
                id="email"
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
              />
            </div>

            <div className="form-options">
              <a href="/forgot-password" className="forgot-password">
                Mot de passe oublié ?
              </a>
            </div>

            <button type="submit" className="login-button">
              SE CONNECTER
            </button>

            <div className="signup-link">
              <span>Pas encore de compte ? </span>
              <a href="/signup">Créer un compte</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;