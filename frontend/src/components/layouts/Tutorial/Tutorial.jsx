import React from "react";
import { useGame } from "@/context/GameContext";
import "./Tutorial.css";
// Images will be in public/assets/tutorial/
// guide.png and bubble.png

const Tutorial = () => {
  const { state, dispatch } = useGame();
  const { visible, current } = state.tutorial;

  // Use current object if available, otherwise fallback (safety)
  const message = current ? current.text : "";
  const pose = current ? current.pose : "guide";

  if (!visible) return null;

  const handleNext = () => {
    dispatch({ type: "NEXT_TUTORIAL_STEP" });
  };

  return (
    <div className="tutorial-overlay" onClick={handleNext}>
      <div className="tutorial-container">
        <div className="guide-character animated-guide">
            {/* Dynamic image source based on pose */}
            <img 
               src={`/assets/tutorial/${pose}.png`} 
               alt="Guide" 
               onError={(e) => { e.target.src = "/assets/tutorial/guide.png"; }} // Fallback
            />
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