import React from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
  width: 80%;
  border-radius: 25px;
  background: ${(props) => (props.index % 2 === 0 ? "#F6F7D4" : "#FCF5EA")};
  margin: 15px auto;
  display: flex;
  padding: 10px;
  overflow: auto; /* Enable text wrapping */
`;

const ImageContainer = styled.div`
  flex: 0 0 30%;
  margin-left: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  padding: 10px;
`;

export default function Review({ reviewItem, index }) {
  const { id, title, review, tags, rating, image } = reviewItem;

  return (
    <ReviewContainer index={index}>
      <ImageContainer>
        <Image src={image} alt="book cover" />
      </ImageContainer>
      <TextContainer>
        {/* <span>{tags}</span> */}
        <p>{rating}</p>
        <h2>{title}</h2>
        <p>{review}</p>
      </TextContainer>
    </ReviewContainer>
  );
}
