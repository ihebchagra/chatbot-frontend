import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Pour savoir si un lien est actif
  const isActive = (path) => location.pathname === path;

  // Gestion fermeture du menu déroulant
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    try {
      const parsedUser = JSON.parse(storedUser);
      setUserEmail(parsedUser?.email || parsedUser?.username || "");
    } catch {
      setUserEmail("");
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location.pathname]);

  // Suppression de compte
  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`https://chedybi.api.iheb.tn/api/delete_account/${userEmail}`);
      alert("Compte supprimé avec succès.");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la suppression du compte :", error);
      alert("Erreur lors de la suppression du compte.");
    }
    setShowConfirmDelete(false);
  };

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setDropdownVisible(false);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" className={isActive("/accueil") ? "active-link" : ""}>
            chatbotEvent
          </NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/accueil" className={isActive("/accueil") ? "active-link" : ""}>Accueil</NavLink></li>
          <li><NavLink to="/programme" className={isActive("/programme") ? "active-link" : ""}>Programme</NavLink></li>
          <li><NavLink to="/chatbot" className={isActive("/chatbot") ? "active-link" : ""}>Chats</NavLink></li>
          <li><NavLink to="/faq" className={isActive("/faq") ? "active-link" : ""}>FAQ</NavLink></li>
          <li><NavLink to="/contact" className={isActive("/contact") ? "active-link" : ""}>Contact</NavLink></li>

          {isAuthenticated && (
            <li><NavLink to="/historique" className={isActive("/historique") ? "active-link" : ""}>Historique</NavLink></li>
          )}

          <li className="menu" ref={menuRef}>
            <button onClick={() => setDropdownVisible(!dropdownVisible)}>
              {isAuthenticated ? "Mon Compte" : "Connexion"}
            </button>

            {dropdownVisible && (
              <ul className="dropdown">
                {isAuthenticated ? (
                  <>
                    <li>
                      <NavLink to="/modifier-compte" onClick={() => setDropdownVisible(false)}>
                        Modifier Mon Compte
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={() => { setDropdownVisible(false); setShowConfirmDelete(true); }}>
                        Supprimer Mon Compte
                      </button>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Déconnexion</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login" onClick={() => setDropdownVisible(false)}>
                        Se connecter
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/inscription" onClick={() => setDropdownVisible(false)}>
                        S’inscrire
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {showConfirmDelete && (
        <div className="auth-modal">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleDeleteAccount} style={{ backgroundColor: "red", color: "white" }}>Oui</button>
              <button onClick={() => setShowConfirmDelete(false)}>Non</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
