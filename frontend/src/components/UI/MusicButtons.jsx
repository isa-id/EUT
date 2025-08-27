// MusicButtons.jsx
import React from "react";
import { useAudio } from "../../context/AudioContext";
import "./UI.css";

export default function MusicButtons() {
  const { toggleMusic, isPlaying, nextTrack } = useAudio();

  return (
    <div className="music-buttons">
      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "⏸" : "▶"}
      </button>
      <button className="music-btn" onClick={nextTrack}>
        ⏭
      </button>
    </div>
  );
}
