import React, { useState } from "react";
import "./PoopEmoji.css";
import Star from "./Star";

const PoopEmoji = ({ poopState }) => {
  const [bounce, setBounce] = useState(0);
  const starStyles = {
    position: "absolute",
    top: -5,
    left: 25,
    transform: "rotate(-180deg) scale(0.2)",
  };
  const starStyles2 = {
    position: "absolute",
    top: 10,
    left: 50,
    transform: "rotate(6deg) scale(0.25)",
  };
  const starStyles3 = {
    position: "absolute",
    top: 10,
    left: 10,
    transform: "rotate(6deg) scale(0.3)",
  };

  return (
    <>
      <div className="emoji-box">
        <div className={poopState}>
          <div
            className="emoji-translated"
            onClick={() => setBounce(1)}
            onAnimationEnd={() => setBounce(0)}
            bounce={bounce}
          >
            <Star location={starStyles} />
            <Star location={starStyles2} />
            <Star location={starStyles3} />

            <div className="poop-emoji">
              <div className="very-top">
                <div className="highlight-1"></div>
                <div className="shadow-1"></div>
              </div>
              <div className="top">
                <div className="highlight-2"></div>
                <div className="shadow-2"></div>
                <div className="highlight-7"></div>
              </div>
              <div className="middle">
                <div className="highlight-3"></div>
                <div className="highlight-6"></div>
                <div className="shadow-3"></div>
              </div>
              <div className="bottom">
                <div className="highlight-4"></div>
                <div className="highlight-5"></div>
              </div>

              <div className="eyes">
                <div className="eye">
                  <div className="eyebrow-1"></div>

                  <div className="highlight-eye-1"></div>
                </div>
                <div className="eye">
                  <div className="eyebrow-1"></div>
                  <div className="highlight-eye-2"></div>
                </div>
              </div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoopEmoji;
