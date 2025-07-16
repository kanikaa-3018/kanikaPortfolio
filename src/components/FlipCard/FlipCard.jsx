import React from "react";
import "./FlipCard.css"; 

const FlipCard = ({ isFlipped, onFlip, front, back }) => {
  return (
    <div className="flip-card-container" onClick={onFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
