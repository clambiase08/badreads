import React from 'react'
import styled from "styled-components";
export default function ReviewedBookItem({review}) {

  const BookItem = styled.div`
    flex: 0 0 auto;
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  `;
  const BookTitle = styled.div`
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 5px;
`;
  return (
    <BookItem>
      <BookTitle>{review.title}</BookTitle>
      <img src={review.image} alt={review.title} />
    </BookItem>
  )
}
