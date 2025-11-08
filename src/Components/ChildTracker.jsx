// src/Components/ChildTracker.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getChildLocation, trackPageVisit } from "./utils/api";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import axios from "axios";

// 🛠 Correction des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ChildTracker = ({ childId }) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState(null);
  const [childImage, setChildImage] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [message, setMessage] = useState("");
  const pageLocation = useLocation();

  useEffect(() => {
    const track = async () => {
      try {
        await trackPageVisit({
          path: pageLocation.pathname,
          timestamp: new Date().toISOString(),
        });
      } catch (err) {
        console.error("Erreur de tracking :", err);
      }
    };
    track();
  }, [pageLocation]);

  useEffect(() => {
    if (!childId) return;
    const fetchLocation = async () => {
      try {
        const data = await getChildLocation(childId);
        setLocation(data);
      } catch (error) {
        console.error("Erreur de géolocalisation :", error.message);
      }
    };
    fetchLocation();
    const interval = setInterval(fetchLocation, 10000);
    return () => clearInterval(interval);
  }, [childId]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChildImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/child/${childId}/position`, {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });
      setMessage(res.data.message || "Position mise à jour !");
    } catch (error) {
      setMessage("Erreur lors de la mise à jour.");
      console.error(error);
    }
  };

  // ✅ Si pas d’ID fourni, ne rien afficher du tout
  if (!childId) return null;
  if (!location) return <p>⏳ Chargement de la position...</p>;

  return (
    <div>
      <h2>{t("trackingTitle", { id: childId })}</h2>

      {/* 📷 Image de l'enfant */}
      <div>
        <label>{t("imageLabel")}:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {childImage && (
          <img src={childImage} alt="enfant" style={{ maxWidth: "200px", marginTop: "10px" }} />
        )}
      </div>

      {/* 🗺️ Carte */}
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={15}
        style={{ height: "500px", width: "100%", marginTop: "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>
            {t("position")}<br />
            {t("latitude")}: {location.latitude.toFixed(5)}<br />
            {t("longitude")}: {location.longitude.toFixed(5)}
          </Popup>
        </Marker>
      </MapContainer>

      {/* 📍 Formulaire de mise à jour manuelle */}
      <div style={{ padding: "20px", maxWidth: "500px", marginTop: "30px", background: "#f7f7f7", borderRadius: "8px" }}>
        <h3>📍 Mettre à jour manuellement la position</h3>
        <form onSubmit={handleSubmit}>
          <label>Latitude :</label>
          <input
            type="number"
            step="0.00001"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          /><br />
          <label>Longitude :</label>
          <input
            type="number"
            step="0.00001"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          /><br />
          <button type="submit" style={{ marginTop: "10px" }}>Mettre à jour</button>
        </form>
        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
      </div>
    </div>
  );
};

export default ChildTracker;
