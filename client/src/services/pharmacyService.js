import api from '../utils/api';

export default {
  /**
   * Récupère toutes les pharmacies
   * @returns {Promise<Array>} Liste des pharmacies
   */
  async getAll() {
    try {
      const response = await api.get('/pharmacies');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des pharmacies:', error);
      throw new Error('Impossible de charger les pharmacies');
    }
  },

  /**
   * Récupère une pharmacie par son ID
   * @param {number|string} id - ID de la pharmacie 
   * @returns {Promise<Object>} Données de la pharmacie
   */
  async getById(id) {
    try {
      const response = await api.get(`/pharmacies/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la pharmacie ${id}:`, error);
      throw new Error('Pharmacie introuvable');
    }
  },

  /**
   * Crée une nouvelle pharmacie
   * @param {Object} pharmacyData - Données de la nouvelle pharmacie
   * @returns {Promise<Object>} Pharmacie créée
   */
  async create(pharmacyData) {
    try {
      const response = await api.post('/pharmacies', pharmacyData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la pharmacie:', error);
      throw new Error('Échec de la création');
    }
  },

  /**
   * Met à jour une pharmacie existante
   * @param {number|string} id - ID de la pharmacie
   * @param {Object} pharmacyData - Nouvelles données
   * @returns {Promise<Object>} Pharmacie mise à jour
   */
  async update(id, pharmacyData) {
    try {
      const response = await api.put(`/pharmacies/${id}`, pharmacyData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la pharmacie ${id}:`, error);
      throw new Error('Échec de la mise à jour');
    }
  },

  /**
   * Supprime une pharmacie
   * @param {number|string} id - ID de la pharmacie à supprimer
   * @returns {Promise<void>}
   */
  async delete(id) {
    try {
      await api.delete(`/pharmacies/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la pharmacie ${id}:`, error);
      throw new Error('Échec de la suppression');
    }
  },

  /**
   * Recherche des pharmacies par critères
   * @param {Object} filters - Critères de recherche
   * @returns {Promise<Array>} Pharmacies correspondantes
   */
  async search(filters) {
    try {
      const response = await api.get('/pharmacies/search', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche des pharmacies:', error);
      throw new Error('Échec de la recherche');
    }
  }
};