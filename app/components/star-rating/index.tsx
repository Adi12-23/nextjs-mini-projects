"use client";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex:any) {
    if (rating != getCurrentIndex) setRating(getCurrentIndex);
    else setRating(0);
  }
  function handleMouseMove(getCurrentIndex:any) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating flex flex-row justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={`base-class ${
              index <= (hover || rating) ? "active" : "inactive"
            }`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={50}
          />
        );
      })}
    </div>
  );
}
