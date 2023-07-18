import React, { useState } from "react";
import styled from "styled-components";
import { FaPoop } from "react-icons/fa";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FaPoop className={index <= (hover || rating) ? "on" : "off"} />
          </Button>
        );
      })}
    </div>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  .on {
    color: #81665c;
  }
  .off {
    color: #ccc;
  }
`;
