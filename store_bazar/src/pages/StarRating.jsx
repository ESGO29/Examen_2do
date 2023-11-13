/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const isFilled = i < fullStars;

      stars.push(
        <span key={i} style={{ color: isFilled ? "gold" : "black" }}>
          ★
        </span>
      );
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
