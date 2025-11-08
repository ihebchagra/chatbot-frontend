// src/Components/Programme.js
import React, { useState } from "react";
import "./Programme.css";
import { useNavigate } from 'react-router-dom';
import { askChatbot } from "./utils/api";


const Programme = () => {
  const datesDisponibles = [
    "2023-04-28",
    "2023-04-29",
    "2023-04-30",
    "2023-05-01",
    "2023-05-02",
    "2023-05-03",
    "2023-05-04",
    "2023-05-05",
    "2023-05-06",
    "2023-05-07",
  ];

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

 const handleDateChange = async (e) => {
  const date = e.target.value;
  setSelectedDate(date);

  if (date) {
    // Appeler automatiquement le chatbot si une date est sélectionnée
    try {
      const chatbotResponse = await askChatbot("Combien de temps dure la foire 2023 ?");
      console.log("Réponse du chatbot :", chatbotResponse);
      alert("🤖 Réponse du chatbot :\n" + chatbotResponse);
    } catch (error) {
      alert("Erreur en interrogeant le chatbot.");
    }

    // Rediriger vers la page du jour sélectionné
    navigate('/programme-jour', { state: { date } });
  }
};


  return (
    <div className="programme-container">
      <h1 className="main-title">Programme de la Maison de Foire 2023</h1>

      <select
        onChange={handleDateChange}
        value={selectedDate}
        className="date-select"
      >
        <option value="">-- Sélectionnez une date --</option>
        {datesDisponibles.map((date) => (
          <option key={date} value={date}>
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </option>
        ))}
      </select>

        {/* ✅ Texte ajouté ici */}
      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#6a3e1f" }}>
        Note : Un programme pour enfants est également disponible. Pour plus d'informations, veuillez consulter le chatbot.
      </p>
    </div>

    
  );
};

export default Programme;
