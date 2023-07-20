import React, { useEffect} from "react";
import styled from "styled-components";
import { FaPoop } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function Review({ reviewItem, index }) {
  const { id, title, review, tags, rating, image } = reviewItem;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <ReviewContainer index={index} id="reviews">
      <ImageContainer>
        <Image src={image} alt="book cover" />
      </ImageContainer>
      <TextContainer>
        {/* <span>{tags}</span> */}
        <label>{Array(rating).fill(<FaPoop />)}</label>
        <p>{review}</p>
        <h2>- {title}</h2>
      </TextContainer>
    </ReviewContainer>
  );
}

  const ReviewContainer = styled.div`
    width: 80%;
    border-radius: 25px;
    background: ${(props) => (props.index % 2 === 0 ? "#F6F7D4" : "#FCF5EA")};
    margin: 15px auto;
    display: flex;
    padding: 10px;
    overflow: auto; /* Enable text wrapping */
    max-height: 150px;
  `;
  
  const ImageContainer = styled.div`
    flex: 0 0 30%;
    margin-left: 10px;
  `;
  
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    text-align: left;
    margin-left: -200px;
    padding-top: 25px;
   
  
    >label {
      color: #81665c;
      display: inline-flex;
      margin-bottom: 15px;
    }
  
    >label > * {
      margin-right: 5px;
    }
  
    >p {
      font-size: 16px;
      font-weight: 200;
      margin-bottom: 5px;
    }
  
    >h2 {
      font-size: 12px;
    }  
  `;
  
  const Image = styled.img`
    width: 28%;
    height: auto;
    padding: 10px;
  `;
