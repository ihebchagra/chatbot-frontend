// src/Components/Historique.js
import React from 'react';

const Historique = () => {
  return (
    <div className="programme-container">
      <h2 className="main-title">Historique des éditions précédentes</h2>
      <p>
        Bienvenue dans l’espace d’archivage de la Maison de Foire. Vous trouverez ici les grands moments,
        événements phares et avancées technologiques des années précédentes.
      </p>

      <div className="historique-entry">
        <h3>🧠 4 août 2025 —  1ére Réussite du Chatbot (réponses bréves)</h3>
        <p>
          À <strong>03h00 du matin</strong>, une étape clé a été franchie dans le développement du chatbot intelligent, aprés avoir fixé la structure des questions en 2 modes
          <span className="badge badge-brief">⚡ Bref</span> pour des réponses rapides et 
          <span className="badge badge-detailed">📜 Détail</span> pour des explications complètes, 
          proches d’un style conversationnel naturel.
          Aprés plusieurs essais le Chatbot a finalement fonctioné en mode bréve : Il a correctement répondu à la question&nbsp;: <em>“À quel jour commence le programme de la foire 2023 ?”</em><br />
          <strong>Réponse générée :</strong>
<div
  className="bot-markdown"
  dangerouslySetInnerHTML={{ __html: `
    📅 Le programme commence le 28 Avril 2023
  `.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\n/g, '<br/>')
  }}
/>

        </p>
        <p>
          Cette réussite marque l’activation complète du moteur d’intention NLP couplé aux données MongoDB. À partir de ce moment,
          le chatbot est devenu capable de traiter les requêtes contextuelles réelles sur les éditions passées.
        </p>

          <h3>🧠 5 août 2025 —  Plusieurs tests </h3>
        <p>
          À <strong>01h00 du matin</strong>, Plusieurs essais ont été effectués .
          Il a correctement répondu à la question&nbsp;: <em>“Combien d'editeurs ont participé à l'édition 2023 ?”</em><br />
         <strong>Réponse générée :</strong>
<div
  className="bot-markdown"
  dangerouslySetInnerHTML={{ __html: `
    📅 Plus que 200 editeurs tunisiens et étrangeres seront presents 
  `.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\n/g, '<br/>')
  }}
/>

        </p>
        <p>
          Ces essais ont confirmé que le chatbot marche parfaitement et qu'il est capable de répondre à des questions sur les éditions passées.     
        </p>

        <h3>📜 28 août 2025 — Reussite des réponses détaillées</h3>
      
        <p>
          Grâce à cette mise à jour, le chatbot adapte désormais automatiquement le format de ses réponses 
          selon la demande de l’utilisateur, tout en intégrant les données de <strong>toutes les collections MongoDB</strong> 
          (programmes, éditeurs, livres, infos générales et jeunesse) , le mode detaillé qui montre une compréhension approfondie et elaboré des questions posées est maintenant operationel.
        </p>
      </div>
        
       <h3>📜  07 Septembre 2025 — Plusieurs tests avec les réponses détaillées</h3>
        <p>
          Plusieurs essais ont été effectués pour tester les réponses détaillées.
          Il a correctement répondu à la question&nbsp;: <em>“Quels sont les éditeurs qui ont participé à l'édition 2023 ?”</em><br />
         <strong>Réponse générée  :</strong>
         <div className="reponse-detaillee">
  <p>📚 Plus de 200 éditeurs de plusieurs pays seront présents.</p>
  <p>
    Ils représenteront un large éventail d’ouvrages : littérature, sciences, jeunesse, 
    et publications techniques.
  </p>
  <h4>Exemples d’éditeurs présents :</h4>
  <ul>
    <li>Jordanie → Association de Conservation du Quran (Stand 205)</li>
    <li>Tunisie → Maison Khrif pour l’Édition (Stand 400)</li>
    <li>Tunisie → Sweeps (Stand 401)</li>
    <li>Tunisie → Douane Nationale des Mines (Stand 402)</li>
    <li>Maroc → StepPublishing (Stand 403)</li>
  </ul>
  <p>✅ Réponse terminée !</p>
</div> 
</p>


      <p className="coming-soon">D’autres archives seront bientôt ajoutées...</p>
    </div>
  );
};

export default Historique;
