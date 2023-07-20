import React, { useContext } from "react";
import Review from "./Review";
import styled from "styled-components";
import { AppContext } from "../context/ContextProvider";


const StyledDiv = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;
const StyledSpan = styled.span`
  color: gray;
  font-size: 14px;
  margin-top: 10px;
`;
const StyledH1 = styled.h1`
  font-size: 48px;
  font-weight: 300;
  padding: 5px;
`;
const Header = styled.header`
  padding: 75px;
`;

export default function MyReviews() {
  const { reviews } = useContext(AppContext);

  return (
    <StyledDiv >
      <Header>
        <StyledSpan>#READERS TELL READERS</StyledSpan>
        <StyledH1>Your Shittiest reviews</StyledH1>
      </Header>
      {reviews.map((reviewItem, index) => (
        <Review key={reviewItem.id} reviewItem={reviewItem} index={index} />
      ))}
    </StyledDiv>
  );
}
