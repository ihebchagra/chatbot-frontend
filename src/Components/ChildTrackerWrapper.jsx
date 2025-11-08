// src/Components/ChildTrackerWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ChildTracker from "./ChildTracker";

const ChildTrackerWrapper = () => {
  const { childId } = useParams();

  // 🛡️ Optionnel : valider la forme de l'ID ici
  if (!childId || childId.length < 3) {
    return <p style={{ color: "red" }}>❌ ID invalide ou manquant.</p>;
  }

  return <ChildTracker childId={childId} />;
};

export default ChildTrackerWrapper;
