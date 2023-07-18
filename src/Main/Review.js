import React from "react";
import styled from "styled-components";

export default function Review({ reviewItem }) {
  const { id, title, review, tags, rating, image } = reviewItem;

  const ReviewContainer = styled.div`
    width: 80%;
    border: 2px dotted black;
    background: ${(props) => (props.index % 2 === 0 ? "#FCF5EA" : "white")};
    margin: 10px auto;
    display: flex;
    padding: 10px;
      overflow: auto; /* Enable text wrapping */
  `;

  const ImageContainer = styled.div`
    flex: 0 0 30%; 
  `;

  const TextContainer = styled.div`
    flex: 0 0 70%; /* Adjust the width as needed */
    padding-left: 10px; /* Add padding between image and text */
  `;

  const Image = styled.img`
    width: 40%;
  `;

  return (
    <ReviewContainer index={id}>
      <ImageContainer>
        <Image src={image} alt="Review" />
      </ImageContainer>
      <TextContainer>
        <section>
          <span>{tags}</span>
          <p>{rating}</p>
          <h2>{title}</h2>
          <p>{review}</p>
        </section>
      </TextContainer>
    </ReviewContainer>
  );
}