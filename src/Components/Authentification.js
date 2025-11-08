import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Form.css";

const Authentification = ({ setIsAuthVisible, handleLogin }) => {
  const [reseauAuth, setReseauAuth] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSocialClick = async (reseau) => {
  if (!username || !password) {
    alert("Veuillez remplir le nom d'utilisateur et le mot de passe.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      credentials: "include", // nécessaire pour que Flask session fonctionne
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, mot_de_passe: password, reseau_auth: reseau })
    });

    const data = await response.json();

    if (response.ok && data.message === "Connexion réussie") {
      // ✅ Stockage cohérent avec la session Flask
      sessionStorage.setItem("authenticated", "true");
      sessionStorage.setItem("username", username);

      // Stockage local supplémentaire (optionnel)
      localStorage.setItem("user", JSON.stringify({ username }));

      setMessage("Connexion réussie !");
      handleLogin && handleLogin();

      // Redirection selon type de compte
      const typeCompte = data.user?.type_compte || "normal";
      const childId = data.user?.childId || "ABC123"; // fallback si pas fourni

      setTimeout(() => {
        setIsAuthVisible && setIsAuthVisible(false);
        if (typeCompte === "premium") {
          navigate("/premium");
        } else {
          navigate(`/tracker/${childId}`);
        }
      }, 1200);
    } else {
      // Affiche message d'erreur précis du back-end
      alert("Erreur de connexion : " + (data.error || data.message));
    }
  } catch (err) {
    console.error("Erreur lors de la connexion :", err);
    alert("❌ Échec de la connexion. Veuillez réessayer.");
  }
};



  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Se connecter</h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </motion.div>

        <motion.div
          className="password-container"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="social-buttons"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {["gmail", "facebook", "messenger", "twitter", "whatsapp"].map((reseau) => (
          <motion.button
            key={reseau}
            className={`btn-social ${reseau}`}
            onClick={() => handleSocialClick(reseau)}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
            }}
          >
            Se connecter avec {reseau.charAt(0).toUpperCase() + reseau.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <div className="form-buttons">
        <button type="button" className="btn-cancel" onClick={() => setIsAuthVisible(false)}>
          Annuler
        </button>
      </div>

      <AnimatePresence>
        {message && (
          <motion.div
            className="success-popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Authentification;
