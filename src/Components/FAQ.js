// src/FAQ.js
import React from "react";
import { motion } from "framer-motion";
import "./FAQ.css"; // Tu peux personnaliser ton style ici

function FAQ() {
  const faqList = [
    {
      question: "Qu'est-ce que le Chatbot Event ?",
      answer: "C'est un assistant intelligent qui vous guide pendant l'événement."
    },
    {
      question: "Comment créer un compte ?",
      answer: "Cliquez sur le bouton en haut à droite et remplissez le formulaire."
    },
    {
      question: "Puis-je modifier mes informations après inscription ?",
      answer: "Oui, vous pouvez modifier vos informations depuis votre profil."
    },
    {
      question: "Comment accéder au programme de l'événement ?",
      answer: "Rendez-vous dans la section 'Programme' via la barre de navigation."
    },
    {
      question: "Combien de langues je peux incorporer pour poser les questions ?",
      answer: "Il y a 7 langues disponibles : arabe, français, anglais, allemand, chinois, espagnol et japonais."
    }
  ];

  // Variants pour le conteneur (déclenche les enfants avec effet escalier)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6 // ⏳ délai entre chaque élément
      }
    }
  };

  // Variants pour chaque item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="faq-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Foire Aux Questions (FAQ)</h1>

      {faqList.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }} // ✨ adouci chaque apparition
        >
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default FAQ;
