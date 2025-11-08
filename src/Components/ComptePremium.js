import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComptePremium.css";

const PremiumPage = () => {
  const navigate = useNavigate();

  return (
    <div className="premium-container">
      <h2>Bienvenue dans l'abonnement Premium !</h2>
      <p>En tant que membre Premium, vous bénéficiez de :</p>
      <ul>
        <li>✔️ Réponses plus rapides et personnalisées</li>
        <li>✔️ Support prioritaire 24/7</li>
        <li>✔️ Accès aux fonctionnalités avancées</li>
        <li>✔️ Stockage augmenté pour les discussions</li>
      </ul>

      <h3>Choisissez votre mode de paiement :</h3>
      <select>
        <option value="card">Carte Bancaire</option>
        <option value="paypal">PayPal</option>
      </select>

      <button onClick={() => alert("Paiement confirmé !")}>Payer</button>
      <button className="cancel-btn" onClick={() => navigate("/")}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default PremiumPage;