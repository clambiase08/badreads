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
  const Title = styled.div`
    margin: 10px;
    font-size: 22px;
    font-weight: 300;
    padding: 5px;
  `;
  return (
    <>
      <Title>-My Reviewed Books-</Title>
      <Container>{reviewedBooks}</Container>
    </>
  );
}
