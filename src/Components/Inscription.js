import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"; // 🆕
import "./Inscription.css";

const SignupForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [username, setUsername] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [typeCompte, setTypeCompte] = useState("normal");
  const [typeReseauAuth, setTypeReseauAuth] = useState("");
  const [reseauAuth, setReseauAuth] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom || !prenom || !username || !dateNaissance || !motDePasse) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }

    if (!typeReseauAuth || !reseauAuth) {
      alert("Veuillez choisir un réseau d'authentification et entrer l'adresse associée !");
      return;
    }

    try {
      const response = await axios.post(
        "https://chedybi.api.iheb.tn/api/register",
        {
          nom,
          prenom,
          username,
          date_naissance: dateNaissance,
          mot_de_passe: motDePasse,
          type_compte: typeCompte,
          type_reseau_auth: typeReseauAuth,
          reseau_auth: reseauAuth,
        },
        { withCredentials: true }
      );

      if (response.status === 409 || response.data.message?.includes("existe déjà")) {
        setErrorMessage("⚠️ Ce nom d'utilisateur est déjà utilisé.");
      } else if (response.status === 201) {
        setSuccessPopup(true);
        setErrorMessage("");
        setTimeout(() => {
          setSuccessPopup(false);
          navigate("/login");
        }, 2000);
      } else {
        setErrorMessage("❌ Une erreur inconnue est survenue.");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setErrorMessage("⚠️ Ce nom d'utilisateur existe déjà.");
      } else {
        setErrorMessage("❌ Erreur serveur. Veuillez réessayer.");
      }
      console.error("Erreur inscription :", error);
    }
  };

  return (
    <motion.div
      className="signup-container"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2>Créer un compte</h2>

      <form onSubmit={handleSubmit}>
        {/* 🧾 Tous les champs restent inchangés */}
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

        <label>Prénom :</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />

        <label>Nom d'utilisateur :</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Date de naissance :</label>
        <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} required />

        <label>Mot de passe :</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label>Type de compte :</label>
        <div className="membership-options">
          <label>
            <input
              type="radio"
              value="normal"
              checked={typeCompte === "normal"}
              onChange={() => setTypeCompte("normal")}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              value="premium"
              checked={typeCompte === "premium"}
              onChange={() => setTypeCompte("premium")}
            />
            Premium
          </label>
        </div>

        <label>Réseau d'authentification (obligatoire) :</label>
        <select value={typeReseauAuth} onChange={(e) => setTypeReseauAuth(e.target.value)} required>
          <option value="">--- Choisir un réseau ---</option>
          <option value="gmail">Gmail</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="messenger">Messenger</option>
          <option value="whatsapp">WhatsApp</option>
        </select>

        <label>Adresse {typeReseauAuth || "email"} :</label>
        <input
          type="email"
          placeholder={`Entrer votre adresse ${typeReseauAuth}`}
          value={reseauAuth}
          onChange={(e) => setReseauAuth(e.target.value)}
          required
        />

        <div className="form-buttons">
          <button type="submit" className="btn-submit">S'inscrire</button>
          <Link to="/" className="btn-cancel">Annuler</Link>
        </div>
      </form>

      <AnimatePresence>
        <motion.form
          key={errorMessage ? "form-error" : "form-ok"}
          onSubmit={handleSubmit}
          initial={{ x: 0 }}
          animate={{ x: [0, -10, 10, -10, 10, 0] }}
          transition={errorMessage ? { duration: 0.4 } : { duration: 0 }}
        >
          {/* ... tous les champs ici ... */}
        </motion.form>
      </AnimatePresence>

      <AnimatePresence>
        {errorMessage && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SignupForm;
