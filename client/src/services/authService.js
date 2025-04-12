import api from '../utils/api';

export default {
  /**
   * Connecte un utilisateur et stocke le token JWT
   * @param {Object} credentials - { emailOrPhone, password }
   * @returns {Promise<Object>} Données utilisateur
   * @throws {Error} Si la connexion échoue
   */
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data.user;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Échec de la connexion');
    }
  },

  /**
   * Déconnecte l'utilisateur et nettoie le stockage local
   */
  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  /**
   * Récupère les données de l'utilisateur connecté
   * @returns {Promise<Object>} Données utilisateur
   * @throws {Error} Si non authentifié
   */
  async getCurrentUser() {
    try {
      // Vérifie d'abord le cache local
      const cachedUser = localStorage.getItem('user');
      if (cachedUser) return JSON.parse(cachedUser);

      const response = await api.get('/auth/me');
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('Get current user error:', error);
      localStorage.removeItem('user');
      throw new Error('Session expirée');
    }
  },

  /**
   * Inscrit un nouvel utilisateur
   * @param {Object} userData - Données d'inscription
   * @returns {Promise<Object>} Utilisateur créé
   * @throws {Error} Si l'inscription échoue
   */
  async signup(userData) {
    try {
      const response = await api.post('/auth/signup', userData);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error.response?.data?.errors || error.message);
      throw new Error(
        error.response?.data?.message || 
        'Échec de l\'inscription: ' + 
        (error.response?.data?.errors?.join(', ') || error.message)
      );
    }
  },

  /**
   * Vérifie si l'utilisateur est authentifié
   * @returns {boolean}
   */
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};