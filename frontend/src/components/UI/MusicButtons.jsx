import react from "react";
import "./UI.css"

export default function MusicButtons({ toggleMusic, isPlaying, nextTrack }) {
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
