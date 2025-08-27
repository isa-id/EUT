import React from "react";
import "./App.css";
import EUT from "./game/EUT";
import { AudioProvider } from "./context/AudioContext";

function App() {
  console.log("App se montó ✅");
  return (
    <AudioProvider>
      <div className="App">
        <EUT />
      </div>
    </AudioProvider>
  );
}

export default App;
