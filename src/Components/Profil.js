import React, { useState } from "react";
import "./Profil.css";
import { FaShareAlt, FaPen, FaWifi } from "react-icons/fa";

const Profil = () => {
  // Simulation de l'historique des chats
  const [chatHistory, setChatHistory] = useState([
    { date: "2025-02-20", messages: ["Bonjour", "Comment ça va ?"] },
    { date: "2025-02-21", messages: ["Quels sont les événements aujourd'hui ?"] },
    { date: "2025-02-22", messages: ["Merci pour les infos !"] },
  ]);

  return (
    <div className="profil-container">
      {/* Navbar du profil */}
      <nav className="profil-navbar">
        <FaPen className="icon-left" title="Nouveau chat" />
        <h2>Mon Profil</h2>
        <div className="icons-right">
          <FaShareAlt className="icon" title="Partager" />
          <FaWifi className="icon" title="Connexion réseau" />
        </div>
      </nav>

      {/* Historique des chats */}
      <div className="chat-history">
        <h3>Historique des Chats</h3>
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-day">
            <h4>{chat.date}</h4>
            <ul>
              {chat.messages.map((msg, msgIndex) => (
                <li key={msgIndex}>{msg}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profil;