import React from "react";
import image1 from "./assets/book-table-home.png";
import image2 from "./assets/books-home.png";
import { BsChatRightText } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <HolyGrailLayout>
      <aside className="left">Your safe space for really bad books</aside>
      <main>
        <ImageWrapper>
        <Image width="150%" src={image2} alt="stack of books" />
        </ImageWrapper>
        <ImageWrapper>
        <Image src={image1} alt="book on table" />
        </ImageWrapper>
      </main>
      <footer>
        <span className="left-bubble">
        <h4 >
          <BsChatRightText /> Your rants, available online
        </h4>
        <p>
          Be honest about your least favorite books and tell us how you really
          feel
        </p>
        </span>
        <span className="right-bubble">
        <h4>
          <BsStar /> Creating Space
        </h4>
        <p>
          Get out those bad feelings with personalized reviews, ratings, and
          attribute tags
        </p>
        </span>
      </footer>
    </HolyGrailLayout>
  );
}

const layoutBox = css`
  width: 100%;
  min-height: 100px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 1px rgba(0, 0, 0, 0.1);
  }
`;


const HolyGrailLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${layoutBox};
  background: #fbfbde;

  .left {
    grid-row: 1;
    grid-column: 1 / 3;
    padding: 1rem;
    font-size: 64px;
    margin-right: 50px;
    z-index: 1000;
    word-wrap: normal;
  }

  main {
    grid-row: 1;
    grid-column: 2 / 4;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #fbfbde;
    padding: 1rem;
    z-index: 900;
    margin-left: 50px;
  }

  footer {
    grid-row: 2;
    background: #fbfbde;
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 10px;

  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: auto;
 `;