// ✅ src/Chatbot.js — version finale améliorée
import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { Circles } from "react-loader-spinner";
import ReactMarkdown from "react-markdown";

let mediaRecorder = null;
let chunks = [];

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Bonjour ! Posez-moi une question." },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [questionMode, setQuestionMode] = useState("text");
  const [responseType, setResponseType] = useState("brief");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // 🌍 Langues disponibles
  const languages = [
    { value: "fr", label: "🇫🇷 Français" },
    { value: "en", label: "🇬🇧 English" },
    { value: "ar", label: "🇸🇦 العربية" },
    { value: "es", label: "🇪🇸 Español" },
    { value: "de", label: "🇩🇪 Deutsch" },
    { value: "zh", label: "🇨🇳 中文" },
    { value: "jp", label: "🇯🇵 日本語" },
  ];

  // 📚 Types de réponses (multilingue)
  const responseTypesLabels = {
    fr: { brief: "Réponse brève", detailed: "Réponse détaillée" },
    en: { brief: "Brief answer", detailed: "Detailed answer" },
    ar: { brief: "إجابة مختصرة", detailed: "إجابة مفصلة" },
    es: { brief: "Respuesta breve", detailed: "Respuesta detallada" },
    de: { brief: "Kurze Antwort", detailed: "Ausführliche Antwort" },
    zh: { brief: "简短回答", detailed: "详细回答" },
    jp: { brief: "簡潔な回答", detailed: "詳細な回答" },
  };

  // ⭐ Feedback messages
  const feedbackMessages = {
    1: "Nous sommes désolés, nous allons nous améliorer 😞",
    2: "Merci pour votre retour, nous allons progresser 🙏",
    3: "Merci ! Nous espérons faire encore mieux 🙂",
    4: "Merci ! Heureux que vous soyez satisfait 😄",
    5: "Merci infiniment ! Nous sommes ravis 😍",
  };

  // 🔽 Scroll automatique
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [messages]);

  // 🧠 Envoi du message texte
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const question = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setInput("");
    setIsLoading(true);
    setError(null);
    setShowFeedback(false);
    setFeedbackGiven(false);
    setShowNotification(false);

    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          question,
          language: selectedLanguage,
          mode: "text",
          response_type: responseType,
        }),
      });

      const data = await res.json();
if (!res.ok) throw new Error(data.error || "Erreur serveur");

// 🎧 Si la réponse est uniquement vocale (pas de texte à afficher)
if (data.text_visible === false && data.audio) {
  try {
    const audio = new Audio(`http://127.0.0.1:5000/${data.audio}`);
    await audio.play();
  } catch (err) {
    console.warn("⚠️ Lecture audio échouée:", err);
  }
  return; // ⛔ Ne rien afficher dans le chat
}

// ✅ Récupération plus souple de la réponse (ton code existant)
let fullText = "❌ Réponse non trouvée.";
if (data.answer) {
  if (typeof data.answer === "string") {
    fullText = data.answer;
  } else if (data.answer.details) {
    fullText = data.answer.details;
  } else if (data.answer.summary) {
    fullText = data.answer.summary;
  } else if (data.answer.answer) {
    fullText = data.answer.answer;
  }
}

      if (responseType === "detailed") {
        let index = 0;
        setMessages((prev) => [...prev, { sender: "bot", text: "" }]);
        const interval = setInterval(() => {
          setMessages((prev) => {
            const updated = [...prev];
            const botMsgIndex = updated.length - 1;
            updated[botMsgIndex].text = fullText.slice(0, index + 1);
            return updated;
          });
          index++;
          if (index >= fullText.length) {
            clearInterval(interval);
            setShowFeedback(true);
            setShowNotification(true);
          }
        }, 20);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: fullText }]);
        setShowFeedback(true);
        setShowNotification(true);
      }

      // 🔊 Lecture vocale aussi pour texte
      if (data.audio && typeof data.audio === "string" && data.audio.trim() !== "" && data.audio.length > 100) {
        try {
          const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
          await audio.play();
        } catch (err) {
          console.warn("⚠️ Lecture audio échouée:", err);
        }
      }

    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Impossible de contacter le serveur." }]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 🎤 Enregistrement audio avec détection de silence
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      chunks = [];
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime((t) => t + 1), 1000);

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = async () => {
        clearInterval(timerRef.current);
        setIsRecording(false);

        const blob = new Blob(chunks, { type: "audio/webm" });
        chunks = [];

        // 🧩 Vérifie s’il y a du son (évite l’envoi de silence)
        if (blob.size < 1000) {
          console.warn("🎙️ Enregistrement trop court — ignoré.");
        if (questionMode !== "audio") {  
          setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Aucun son détecté, veuillez réessayer." }]);
        }
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const base64Audio = reader.result.split(",")[1];
          try {
            const res = await fetch("http://localhost:5000/api/ask", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mode: "audio",
                audio: base64Audio,
                language: selectedLanguage,
                response_type: responseType,
              }),
            });

            const data = await res.json();
            const botResponse = data.answer?.details || "❌ Pas de réponse audio.";

          // 🎧 En mode audio, ne pas afficher le texte — juste jouer la voix
            if (questionMode !== "audio") {
                setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
          } else {
                setShowFeedback(true); // ⭐ Affiche seulement le système d’étoiles
                 }


            if (data.audio && typeof data.audio === "string" && data.audio.trim() !== "" && data.audio.length > 100) {
              try {
                const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
                await audio.play();
              } catch (err) {
                console.warn("⚠️ Erreur lecture audio:", err);
              }
            }
          } catch (err) {
            console.error("⚠️ Erreur envoi audio:", err);
            setMessages((prev) => [...prev, { sender: "bot", text: "❌ Erreur lors du traitement de l'audio." }]);
          }
        };
      };
    } catch (err) {
      console.error("⚠️ Erreur d’enregistrement:", err);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
  };

  // ⭐ Feedback
  const handleFeedback = (stars) => {
    setMessages((prev) => [...prev, { sender: "bot", text: feedbackMessages[stars] }]);
    setFeedbackGiven(true);
    setShowFeedback(false);
  };

  // 📝 Markdown
  const renderMarkdown = (content) => (
    <ReactMarkdown
      components={{
        h6: ({ node, ...props }) => <strong {...props} />,
        h5: ({ node, ...props }) => <strong {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <div className={`chatbot-container ${isFocus ? "focus-mode" : ""}`}>
      <h2>🤖 Chatbot Event</h2>
      <button className="focus-btn" onClick={() => setIsFocus(!isFocus)}>
        {isFocus ? "💬 Réduire" : "🖥️ Mode focus"}
      </button>

      <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
        <option value="">🌍 Choisir une langue</option>
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>{lang.label}</option>
        ))}
      </select>

      <label>🗨️ Mode de question :</label>
      <select value={questionMode} onChange={(e) => setQuestionMode(e.target.value)}>
        <option value="text">📝 Texte</option>
        <option value="audio">🎤 Audio</option>
      </select>

      {selectedLanguage && (
        <select value={responseType} onChange={(e) => setResponseType(e.target.value)}>
          <option value="brief">{responseTypesLabels[selectedLanguage]?.brief}</option>
          <option value="detailed">{responseTypesLabels[selectedLanguage]?.detailed}</option>
        </select>
      )}

      <div className="chat-history">
        {messages.map((msg, idx) =>
          msg.sender === "bot" ? (
            <div key={idx} className="bot-text">{renderMarkdown(msg.text)}</div>
          ) : (
            <div key={idx} className="user-text">{msg.text}</div>
          )
        )}

        {questionMode === "audio" && (
          <div className="audio-controls">
            {!isRecording ? (
              <button onClick={startRecording}>🎤 Démarrer</button>
            ) : (
              <button onClick={stopRecording}>⏹️ Arrêter</button>
            )}
            {isRecording && <span>⏱️ {recordingTime}s</span>}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="bot-message typing-indicator fade-in">
          <Circles height={30} width={30} color="#8B4513" />
          <span className="typing-dots">Le chatbot réfléchit...</span>
        </div>
      )}

      <div ref={messagesEndRef} />

      {showNotification && <div className="notification fade-in">✅ Réponse terminée !</div>}

      {showFeedback && !feedbackGiven && (
        <div className="feedback-container">
          <span>⭐ Donnez votre avis :</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleFeedback(star)}>{star}★</button>
          ))}
        </div>
      )}

      {error && <div className="error-message">⚠️ {error}</div>}

      {questionMode === "text" && (
        <div className="input-area">
          <input
            type="text"
            value={input}
            placeholder="Écrivez votre question..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? "⏳..." : "Répondre"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
