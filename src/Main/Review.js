import React from "react";
import styled from "styled-components";

export default function Review({ reviewItem }) {
  const { id, title, review, tags, rating, image } = reviewItem;

  const ReviewContainer = styled.div`
    width: 80%;
    border: 2px dotted black;
    background: ${props => (props.index % 2 === 0 ? 'yellow' : 'white')};
  `;

  return (
    <ReviewContainer index={id}>
      <span>#READERS TELL READERS</span>
      <h1>Your Shittiest reviews</h1>
      <section>
        <span>{tags}</span>
        <p>{rating}</p>
        <h2>{title}</h2>
        <p>{review}</p>
      </section>
      <img src={image} alt="Review" style={{ width: '20px' }} />
    </ReviewContainer>
  );
}
