// Components/ModifierCompte.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ModifierCompte = ({ userData, onUpdate }) => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    date_naissance: "",
    type: "",
  });

  useEffect(() => {
    if (userData) {
      setForm({
        nom: userData.nom || "",
        prenom: userData.prenom || "",
        email: userData.email || "",
        date_naissance: userData.date_naissance || "",
        type: userData.type || "normal",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const confirm = window.confirm("Voulez-vous vraiment enregistrer ces modifications ?");
    if (!confirm) return;

    try {
      const response = await axios.put("https://chedybi.api.iheb.tn/api/modifier-compte", form);
      alert("Compte modifié avec succès !");
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error("Erreur de modification :", error);
      alert("Une erreur est survenue lors de la modification.");
    }
  };

  const handleCancel = () => {
    window.history.back(); // Revenir à la page précédente
  };

  return (
    <div className="modifier-compte">
      <h2>Modifier votre compte</h2>
      <form>
        <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" />
        <input type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom" />
        <input type="email" name="email" value={form.email} disabled />
        <input type="date" name="date_naissance" value={form.date_naissance} onChange={handleChange} />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="normal">Normal</option>
          <option value="premium">Premium</option>
        </select>
      </form>
      <button onClick={handleSubmit}>Modifier</button>
      <button onClick={handleCancel}>Annuler</button>
    </div>
  );
};

export default ModifierCompte;
