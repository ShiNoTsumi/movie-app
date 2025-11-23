import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <li class="card">
      <div class="candy_card">
        <div class="card_image">
          <img src={candy.canImage} alt="Aero Chocolate Bar"/>
        </div>
        <div class="card_content">
          <h2 class="card_title">{candy.brand}</h2>
          <div class="card_text">
            <p>{candy.descrip}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CandyCard;
