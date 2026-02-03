// GameLayout.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import MusicButtons from "../UI/MusicButtons";
import "./GameLayout.css";
import "../UI/UI.css";
import Tutorial from "./Tutorial/Tutorial";

const GameLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
      <PageOne key="page1" />, 
      <PageTwo key="page2" />, 
      <PageThree key="page3" />,
      <PageFour key="page4" />
  ];

  // Map de colores/degradados por página
  const gradients = [
  ["#1944a7ff", "#2481bbff"], // PageOne (Points)
  ["#59a043ff", "#1b5e20"], // PageTwo (Sids)
  ["#6a1b9a", "#bc4795ff"], // PageThree (Riddles)
  ["#5e1b31ff", "#a04343ff"], // PageFour (Secrets - Black/Grey)
];

  // Reproducir / pausar música automáticamente
  
  return (
    <div
  className="game-layout gradient-background"
  style={{
    "--color1": gradients[currentPage][0],
    "--color2": gradients[currentPage][1],
  }}
>
      <Header />
      <div className="page-container">
        {pages[currentPage]}
        <MusicButtons />
      </div>

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
      


      <Footer />
      <Tutorial />
    </div>
  );
};

export default GameLayout;
