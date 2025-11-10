import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Inscription from "./Components/Inscription";
import Authentification from "./Components/Authentification"; // ✅ lien login
import Accueil from "./Components/Accueil";
import ComptePremium from "./Components/ComptePremium";
import ModifierCompte from "./Components/ModifierCompte"; // ✅
import Programme from "./Components/Programme";
import ProgrammeJour from "./Components/ProgrammeJour";
import FAQ from "./Components/FAQ";
import Historique from "./Components/Historique";
import Chatbot from "./Components/Chatbot";
import Contact from "./Components/Contact";
import Profil from "./Components/Profil";
import ChildTrackerWrapper from "./Components/ChildTrackerWrapper";

import { checkAuth } from "./Components/utils/api";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const data = await checkAuth();
        if (data.authenticated || data.isAuthenticated) {
          setIsAuthenticated(true);
          setUserData({
            username: data.username,
            type_compte: data.type_compte,
          });
        } else {
          setIsAuthenticated(false);
          setUserData(null);
        }
      } catch (err) {
        console.error("Erreur session :", err);
        setIsAuthenticated(false);
      }
    };

    verifySession();
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/premium" element={<ComptePremium />} />
        <Route
          path="/login"
          element={<Authentification setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/modifier-compte"
          element={
            isAuthenticated && userData ? (
              <ModifierCompte userData={userData} onUpdate={() => console.log("modifié")} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/chatbot"
          element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/programme-jour" element={<ProgrammeJour />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/faq" element={<FAQ />} />

        <Route
          path="/profil"
          element={isAuthenticated && userData ? <Profil userData={userData} /> : <Navigate to="/login" />}
        />

        <Route path="/tracker/:childId" element={<ChildTrackerWrapper />} />
      </Routes>
    </Router>
  );
}

// trigger redeploy

export default App;