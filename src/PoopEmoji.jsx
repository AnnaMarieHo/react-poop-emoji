import React, { useState } from "react";
import "./PoopEmoji.css";

const PoopEmoji = ({ poopState }) => {
  const [bounce, setBounce] = useState(0);

  return (
    <div className="emoji-box">
      <div className={poopState}>
        <div
          className="emoji-translated"
          onClick={() => setBounce(1)}
          onAnimationEnd={() => setBounce(0)}
          bounce={bounce}
        >
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
  );
};

export default PoopEmoji;
