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
    top: -110,
    left: 50,
    transform: "rotate(-55deg) scale(0.4)",
  };

  const starStyles2 = {
    position: "absolute",
    top: -80,
    left: -100,
    transform: "rotate(30deg) scale(0.4)",
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((e) => !e);
  }

  const openClass = isOpen ? "box-open" : "";
  const poopState = isOpen ? "poop-jump" : "whole-emoji";

  return (
    <div>
      <div
        className="box-size"
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   minWidth: 400,
        //   transform: "scale(1.4)",
        // }}
      >
        {isOpen && (
          <>
            <Poop poopState={poopState} />
          </>
        )}
        {/* <div className="poop-box" draggable="true"></div> */}
        <BoxComponent
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          openClass={openClass}
          handleIsOpen={handleIsOpen}
          isOpen={isOpen}
        />
        {!isOpen && (
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
