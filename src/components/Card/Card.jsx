import React from "react";
import "./Card.css";

const Card = ({ image, name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
};

export default Card;
