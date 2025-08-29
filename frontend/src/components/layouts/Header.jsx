import React from "react";
import PointsDisplay from "../UI/PointsDisplay";
import "./Header.css";

export default function Header() {
  return (
    <header className="game-header">
      <h1 className="game-title"> 3U7</h1>
      <PointsDisplay />
    </header>
  );
}
