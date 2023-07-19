// AboutBookCard.js
import React from "react";
import styled from "styled-components";
import AvailableBookItem from "./AvailableBookItem";
import { Link } from "react-router-dom";

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
    display: flex;
    position: relative;
    margin-right: 130px;   
    flex: 0 0 auto;
  `;

  const Card = styled.div`
    background-color: white;
    border-radius: 5%;
    margin: 0 auto;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
  `;

  const Button = styled.button`
    margin: 2px auto;
    background: linear-gradient(to bottom, gray 5%, #ecf494 100%);
    font-size: 10px;
    font-weight: bold;
    border-radius: 5%;
    box-shadow: 0px 1px 0px 0px #ecf494;
    padding: 5px;
    text-shadow: 0px 1px 0px #ecf494;
  `;

  const BookSubTitle = styled.h4`
    font-size: 10px;
    color: gray;
    padding-bottom: 10px;
  `;


  return (
    <div>
      <Container>
        <Card>
          <AvailableBookItem book={book} id={book.id} />
          <BookSubTitle>
            Published: {book.volumeInfo.publishedDate}{" "}
          </BookSubTitle>
          <Link to={`/account/${book.id}`}>
            <Button>Write a Review</Button>
          </Link>
          <br />
        </Card>
      </Container>
    </div>
  );
}
