import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PinnedBar from "./PinnedBar";
import PageOne from "../pages/PageOne";
// 🔜 luego importaremos más páginas (PageTwo, PageThree...)

import "./GameLayout.css";

const GameLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <PageOne key="page1" />,
    // <PageTwo key="page2" />,
    // <PageThree key="page3" />,
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="game-layout">
      <Header />
      

      <div className="page-container">{pages[currentPage]}</div>

      {/* Botones flotantes */}
      {currentPage > 0 && (
        <button className="nav-button left" onClick={prevPage}>
          ◀
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button className="nav-button right" onClick={nextPage}>
          ▶
        </button>
      )}

      <Footer />
    </div>
  );
};

export default GameLayout;
