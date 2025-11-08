import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Affiche le message de confirmation
    setConfirmationVisible(true);

    // ⏳ Cache après 3 secondes
    setTimeout(() => setConfirmationVisible(false), 3000);

    // Réinitialise le formulaire
    setName("");
    setEmail("");
    setMessage("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 80
      }
    }
  };

  const confirmationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Contactez-nous</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p>📧 Email: support@chatbotevent.com</p>
        <p>💬 Messenger: <a href="https://m.me/chatbotevent" target="_blank" rel="noopener noreferrer">Discuter sur Messenger</a></p>
        <p>🔵 Facebook: <a href="https://www.facebook.com/chatbotevent" target="_blank" rel="noopener noreferrer">Suivez-nous sur Facebook</a></p>
        <p>📞 Téléphone: +123 456 789</p>
        <p>📍 Adresse: 123, Rue des Événements, Paris</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <label>Nom :</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message :</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Envoyer</button>
      </motion.form>

      {/* ✅ Message de confirmation animé */}
      <AnimatePresence>
        {confirmationVisible && (
          <motion.div
            className="confirmation-message"
            variants={confirmationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            ✅ Message envoyé avec succès !
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
