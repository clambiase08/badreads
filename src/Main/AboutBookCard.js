// AboutBookCard.js
import React from 'react';
import styled from "styled-components";
import AvailableBookItem from './AvailableBookItem';

export default function AboutBookCard({ book }) {
  console.log(book);
  const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
   display: flex;
  flex-wrap: wrap;
  align-content: center;
  row-gap: 10px;
`;
const BookImage = styled.img`
width: 15%;
  height: 15%;  
  `;
  const Card = styled.div`
   margin: auto; 
   width: 25%;  
  height: 20%;
  `;

  return (
    <div>

   <Separator>
   <Card>
      <h2>{book.volumeInfo.title}</h2>
      <h3>Published: {book.volumeInfo.publishedDate} </h3>
     
      <AvailableBookItem book={book} id={book.id}/>
      {/* <BookImage src={book.volumeInfo.imageLinks.smallThumbnail}/> */}
    <br/>
      <p>{book.volumeInfo.description}</p>
      </Card>
      </Separator>
     
    </div>
  )
}