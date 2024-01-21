import React, { useState } from "react";
import "./BoxComponent.css";

export default function BoxComponent({
  handleIsOpen,
  openClass,
  onMouseOver,
  onMouseOut,
  isOpen,
}) {
  // const [lidBounce, setLidBounce] = useState(0);
  // const [boxBounce, setBoxBounce] = useState(0);
  const boxPaused = isOpen ? "entire-box-paused" : "entire-box";
  const lidPaused = isOpen ? "lid-container-paused" : "lid-container";

  return (
    <>
      <div
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
        className={boxPaused}
        // onClick={() => {
        //   setLidBounce(1);
        //   setBoxBounce(1);
        // }}
        // onAnimationEnd={() => {
        //   setLidBounce(0);
        //   setBoxBounce(0);
        // }}
        // lidBounce={lidBounce}
        // boxBounce={boxBounce}
      >
        <div className="container" onClick={handleIsOpen}>
          <div className="box">
            <div className="ribbon-middle"></div>
          </div>
          <div className="box-shadow"></div>
          <div className={openClass}>
            <div className={lidPaused}>
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
