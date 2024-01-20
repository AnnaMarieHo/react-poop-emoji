import { useState } from "react";
// import ChatGPTPoopEmoji from "./ChatGptPoopEmoji";
import BoxComponent from "./BoxComponent";
import "./App.css";
import Star from "./Star";
import Poop from "./PoopEmoji";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const starStyles1 = {
    position: "absolute",
    top: -60,
    left: 250,
    transform: "rotate(-75deg) scale(0.5)",
  };

  const starStyles2 = {
    position: "absolute",
    top: -80,
    left: 100,
    transform: "rotate(30deg) scale(0.4)",
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((e) => !e);
  }

  const openClass = isOpen ? "box-open" : " ";
  const poopState = isOpen ? "poop-jump" : "whole-emoji";

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 400,
          transform: "scale(1.4)",
        }}
      >
        {isOpen && <Poop poopState={poopState} />}

        <BoxComponent
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          openClass={openClass}
          handleIsOpen={handleIsOpen}
        />
        {isHovering && (
          <>
            <Star location={starStyles1} />
            <Star location={starStyles2} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
