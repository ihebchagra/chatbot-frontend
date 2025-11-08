// src/Accueil.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Accueil.css";

const Accueil = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Bienvenue dans l'espace du Chatbot Event",
    "Notre chatbot est conçu pour répondre à toutes vos questions en temps réel.",
    "Trouvez rapidement les stands, horaires et dernières mises à jour de l'événement.",
    "Utilisez notre assistant intelligent pour une meilleure expérience !",
    "Comment puis-je vous servir ?",
  ];

  useEffect(() => {
    if (textIndex < phrases.length) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <div className="accueil">
      <div className="intro">
        {phrases.slice(0, textIndex + 1).map((phrase, index) => (
          <p key={index} className="fade-in">{phrase}</p>
        ))}
      </div>

      {/* 👉 Nouveau bouton pour rediriger vers chatbot */}
      <Link to="/chatbot" className="btn-chatbot">
        Accéder au Chatbot
      </Link>

      <footer className="footer">
        Créé par Chedy Souilhi en 2025 ©
      </footer>
    </div>
  );
};

export default Accueil;
