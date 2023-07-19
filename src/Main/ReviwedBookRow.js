import React, { useContext } from "react";
import ReviewedBookItem from "./ReviewedBookItem";
import { styled } from "styled-components";
import { AppContext } from "../context/ContextProvider";

export default function ReviewedBookRow() {
  const { reviews } = useContext(AppContext);

  const reviewedBooks = reviews.map((review) => {
    return <ReviewedBookItem key={review.id} review={review} />;
  });

  const Container = styled.div`
    display: flex;
    overflow-x: auto;
    width: 80%;
    padding: 10px;
    margin: 0 auto;
    justify-content: flex-start;
  `;
  return (
    <Container>
      <div>-My Reviewed Books-</div>
      {reviewedBooks}
    </Container>
  );
}