import React, { useContext } from "react";
import AboutBookCard from "./AboutBookCard";
import { AppContext } from "../context/ContextProvider";
import { styled } from "styled-components";

export default function AboutBookRow() {
  const { books } = useContext(AppContext);

  //console.log(books);
  const Container = styled.div`
    background-color: #F6F7D4;
    display: flex;
    overflow-x: auto;
    width: 80%;
    padding: 10px;
    margin: 50px auto;
    justify-content: flex-start;
  `;

  let booksDisplay = books.map((book) => (
    <AboutBookCard book={book} key={book.id} />
  ));

  return <Container>{booksDisplay}</Container>;
}
