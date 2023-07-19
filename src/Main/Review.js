import React from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
width: 80%;
border-radius: 2%.5;
background: ${(props) => (props.index % 2 === 0 ? "rgba(252, 245, 234, 1)" : "rgba(246, 247, 212, 1)")};
margin: 15px auto;
display: flex;
padding: 10px;
  overflow: auto; /* Enable text wrapping */
`;

const ImageContainer = styled.div`
flex: 0 0 30%; 
`;

const TextContainer = styled.div`
flex: 0 0 70%; 
padding-left: 10px; 
`;

const Image = styled.img`
width: 40%;
`;

export default function Review({ reviewItem, index }) {
  const { id, title, review, tags, rating, image } = reviewItem;



  return (
    <ReviewContainer index={index}>
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
