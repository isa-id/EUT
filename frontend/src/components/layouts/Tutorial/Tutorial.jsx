import React from "react";
import { useGame } from "@/context/GameContext";
import "./Tutorial.css";
// Images will be in public/assets/tutorial/
// guide.png and bubble.png

const Tutorial = () => {
  const { state, dispatch } = useGame();
  const { visible, message } = state.tutorial;

  if (!visible) return null;

  const handleClose = () => {
    dispatch({ type: "CLOSE_TUTORIAL" });
  };

  return (
    <div className="tutorial-overlay" onClick={handleClose}>
      <div className="tutorial-container">
        <div className="guide-character">
            {/* Using absolute path from public */}
            <img src="/assets/tutorial/guide.png" alt="Guide" />
        </div>
        <div className="speech-bubble">
            <img src="/assets/tutorial/bubble.png" alt="Speech Bubble" className="bubble-bg"/>
            <p className="bubble-text">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;