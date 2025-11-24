import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <li className="card">
      <div className="candy_card">
        <div className="card_image">
          <img src={candy.canImage} alt="Aero Chocolate Bar"/>
        </div>
        <div className="card_content">
          <h2 className="card_title">{candy.brand}</h2>
          <div className="card_text">
            <p>{candy.descrip}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CandyCard;
