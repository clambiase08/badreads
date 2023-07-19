import React, {useContext} from 'react'
import Review from './Review'
import styled from "styled-components";
import { AppContext } from "../context/ContextProvider";

const StyledDiv = styled.div`
  text-align: center; /* Center-align the text within the div */
`;
const StyledSpan = styled.span`
  color: gray;
  font-size: 14px;
  margin-top: 10px;
`;
const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
`;

export default function MyReviews() {
  const {reviews} = useContext(AppContext);

  return (
    <StyledDiv> {/* Wrap the content in a div and apply the center alignment */}
      <StyledSpan>#READERS TELL READERS</StyledSpan>
      <StyledH1>Your Shittiest reviews</StyledH1>
      {reviews.map((reviewItem) => (
        <Review key={reviewItem.id} reviewItem={reviewItem} />
      ))}
    </StyledDiv>
  );
}
