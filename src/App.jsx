import { useState } from "react";
// import ChatGPTPoopEmoji from "./ChatGptPoopEmoji";
import BoxComponent from "./BoxComponent";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 300,
        transform: "scale(1.4)",
      }}
    >
      <BoxComponent />
    </div>
  );
}

export default App;
