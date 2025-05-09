import React from "react";
import "./SkipCard.css"; // Make sure to create this CSS file
import containerImage from "../assets/container.png"; // Use your single image here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const SkipCard = ({ skip }) => {
  const { size, hire_period_days, price_before_vat, vat, allowed_on_road } =
    skip;
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;

  return (
    <div className="skip-card">
      <div className="skip-card-img">
        <img src={containerImage} alt="Skip" />
      </div>
      <div className="skip-card-body">
        <h3>{size} Yard Skip</h3>
        <p>{hire_period_days}-day hire period</p>
        <p className="price">£{totalPrice.toFixed(0)}</p>
        {!allowed_on_road && (
          <div className="warning">
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <span className="not-allowed">Not Allowed On The Road</span>
          </div>
        )}
        <button>Select This Skip →</button>
      </div>
    </div>
  );
};

export default SkipCard;
