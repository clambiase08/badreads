import React, { useContext, useRef } from "react";
import AvailableBookItem from "./AvailableBookItem";
import { styled } from "styled-components";
import { AppContext } from "../context/ContextProvider";

export default function AvailableBookRow() {
  const { books } = useContext(AppContext);
  const bookRef = useRef();

  if (!books || books.length === 0) {
    return <div>No available books.</div>;
  }

  const availableBookItem = books.map((book) => {
    return <AvailableBookItem key={book.id} book={book} id={book.id} />;
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
   font-size: 15px;
   font-weight: bold;
   padding: 5px;
 `;
  return (
    <>
      <Title>-Choose a Book to Review-</Title>
      <Container>{availableBookItem}</Container>
    </>
  );
}
