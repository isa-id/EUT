// GameLayout.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import { useAudio } from "../../context/AudioContext";
import "./GameLayout.css";
import "../UI/UI.css";

const GameLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { bgMusic, toggleMusic, isPlaying } = useAudio();
  const pages = [<PageOne key="page1" />, <PageTwo key="page2" />, <PageThree key="page3" />];

  // Map de colores/degradados por página
  const gradients = [
  ["#1b6b9a", "#47b4bcff"], // PageOne (Points)
  ["#59a043ff", "#1b5e20"], // PageTwo (Sids)
  ["#6a1b9a", "#bc4795ff"], // PageThree (Riddles)
];

  // Reproducir / pausar música automáticamente
  useEffect(() => {
    if (!bgMusic) return;
    if (isPlaying) bgMusic.play().catch(() => {});
    else bgMusic.pause();
  }, [bgMusic, isPlaying]);

  return (
    <div
  className="game-layout gradient-background"
  style={{
    "--color1": gradients[currentPage][0],
    "--color2": gradients[currentPage][1],
  }}
>
      <Header />
      <div className="page-container">{pages[currentPage]}</div>

      {/* Navegación entre páginas */}
      {currentPage > 0 && (
        <button className="nav-button left" onClick={() => setCurrentPage(currentPage - 1)}>
          ◀
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button className="nav-button right" onClick={() => setCurrentPage(currentPage + 1)}>
          ▶
        </button>
      )}

      {/* Contenedor de botones de música */}
      <div className="music-buttons">
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          className="music-btn"
          onClick={() => {
            const nextTrack = (bgMusic?.currentTrack || 0) + 1;
            if (bgMusic) bgMusic.currentTrack = nextTrack;
          }}
        >
          ⏭
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default GameLayout;
