import axios from "axios";

const API_BASE = "http://localhost:5000";

// ✅ Vérifie l’authentification de la session
export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_BASE}/api/is-auth`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la vérification de l'authentification:", error);
    throw error;
  }
};

// ✅ Connexion d’un utilisateur
export const loginUser = async (username, password, reseau_auth = "") => {
  try {
    const response = await axios.post(`${API_BASE}/login`, {
      username,
      password,
      reseau_auth,
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Erreur de connexion :", error.response?.data || error);
    throw error;
  }
};

// ✅ Inscription
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE}/register`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur d'inscription :", error.response?.data || error);
    throw error;
  }
};

// ✅ Déconnexion
export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE}/logout`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    throw error;
  }
};

// ✅ Supprimer compte
export const deleteAccount = async (username) => {
  try {
    const response = await axios.delete(`${API_BASE}/api/delete-account/${username}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du compte :", error);
    throw error;
  }
};

// ✅ Mettre à jour le compte
export const updateAccount = async (username, updateData) => {
  try {
    const response = await axios.put(`${API_BASE}/api/update-account/${username}`, updateData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du compte :", error);
    throw error;
  }
};

// ✅ Envoie une question au chatbot programmé
export const askQuestion = async (question) => {
  try {
    const response = await axios.post(`${API_BASE}/search`, { question }, {
      withCredentials: true,
    });
    return response.data.response;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la question :", error);
    throw error;
  }
};

// ✅ Envoie une question au chatbot général
export const askChatbot = async (question) => {
  try {
    const response = await axios.post(`${API_BASE}/chatbot`, { question }, {
      withCredentials: true,
    });
    return response.data.response;
  } catch (error) {
    console.error("Erreur avec /chatbot :", error);
    throw error;
  }
};

// ✅ Récupère la position actuelle de l’enfant par son ID
export const getChildLocation = async (childId) => {
  try {
    const response = await axios.get(`${API_BASE}/api/child-location/${childId}`, {
      withCredentials: true,
    });
    return response.data.location;
  } catch (error) {
    console.error("Erreur lors de la récupération de la position de l’enfant :", error);
    throw error;
  }
};

// ✅ Signale une visite de page pour un enfant
export const trackPageVisit = async (childId, pageName) => {
  try {
    const response = await axios.post(`${API_BASE}/api/track-visit`, {
      child_id: childId,
      page: pageName,
    }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors du tracking de la page :", error);
    throw error;
  }
};
