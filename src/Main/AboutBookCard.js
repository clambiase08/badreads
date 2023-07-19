// AboutBookCard.js
import React from 'react';
import styled from "styled-components";
import AvailableBookItem from './AvailableBookItem';
import { Link } from 'react-router-dom';

export default function AboutBookCard({ book }) {

  const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Container = styled.div`
   display: grid-column;
  flex-wrap: wrap;
  align-content: center;
  `;

  const Card = styled.div`
   margin: auto; 
   width: 25%;  
  height: 20%;
  `;
const Button = styled.button`
margin: 2px;
background: #9BE8D8;
font-weight: bold;
border-radius: 15%;
border: 2px solid black;
padding: 1px;`

  return (
    <div>

   <Container>
   <Card>
      <h2>{book.volumeInfo.title}</h2>
      <h3>Published: {book.volumeInfo.publishedDate} </h3>
     
      <AvailableBookItem book={book} id={book.id}/>
     <Link to="/account/:id"><Button>Write a Review</Button></Link>
    <br/>
            </Card>
      </Container>
     
    </div>
  )
}