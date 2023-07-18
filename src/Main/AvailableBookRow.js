import React from 'react'
import AvailableBookItem from './AvailableBookItem'
import { styled } from "styled-components";

export default function AvailableBookRow({books}) {
  if (!books || books.length === 0) {
    return <div>No available books.</div>;
  }

  const availableBookItem = books.map(book => {
    return <AvailableBookItem key={book.id} book={book} id={book.id} />
  })
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
      <div>-Choose a Book to Review-</div>
      {availableBookItem}
    </Container>
  )
}
