import React, { useState } from "react";
import Poop from "./PoopEmoji";
import "./BoxComponent.css";

export default function BoxComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((e) => !e);
  }

  const openClass = isOpen ? "box-open" : " ";
  const poopState = isOpen ? "poop-jump" : "whole-emoji";

  return (
    <>
      <Poop poopState={poopState} />

      <div className="entire-box">
        <div className="container" onClick={handleIsOpen}>
          <div className="box">
            <div className="ribbon-middle"></div>
          </div>
          <div className="box-shadow"></div>
          <div className={openClass}>
            <div className="lid-container">
              <div className="bow-left"></div>
              <div className="bow-right"></div>
              <div className="bow-middle"></div>
              <div className="box-lid">
                <div className="ribbon-middle-top"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
