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
          <Image src={image2} alt="stack of books" />
        </ImageWrapper>
        <ImageWrapper>
          <Image className="right-image" src={image1} alt="book on table" />
        </ImageWrapper>
      </main>
      <footer>
        <Span>
          <div className="left-bubble">
            <h4>
              <BsChatRightText className="chat" size={30}/>
            </h4>
            <div className="left-text">
              <p className="header-text">Your rants, available online</p>
              <p>
                Be honest about your least favorite books and tell us how you
                really feel
              </p>
            </div>
          </div>
          <div className="right-bubble">
            <h4>
              <BsStar className="star" size={30}/> 
            </h4>
            <div className="right-text">
              <p className="header-text">Creating Space</p>
              <p>
              Get out those bad feelings with personalized reviews, ratings, and
              attribute tags

              </p>
            </div>
          </div>
        </Span>
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
  grid-template-columns: 1.5fr 1fr 1fr;
  ${layoutBox};
  background: #fbfbde;

  .left {
    grid-row: 1;
    grid-column: 1 / 3; /* Spans both columns */
    padding: 150px 20px;
    font-size: 64px;
    margin-right: 20px;
    z-index: 1000;
    word-wrap: normal;
    font-weight: 600;
  }

  main {
    grid-row: 1;
    grid-column: 2 / 4; /* Spans both columns */
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
    grid-column: 1 / 4;
    background: #fbfbde;
    padding: 1rem;
  }
`;
const Span = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Added a new column for chat/star icons */
  gap: 100px;
  padding: 0.5rem;
  font-size: 16px;
  font-weight: lighter;

  .left-bubble,
  .right-bubble {
    display: grid;
    grid-template-columns: auto 1fr; /* Nested grid for chat/star and text */
    gap: 10px;
  }

  .chat,
  .star {
    align-self: center; /* Align the icons vertically to the center */
  }

  .left-text,
  .right-text {
    align-self: center; /* Align the text vertically to the center */
    word-wrap: normal;
  }

  .header-text {
    font-size: 24px;
    font-weight: 300;
  }

`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Image = styled.img`
  height: auto;

  .right-image {
    object-fit: cover;
    object-position: left;
    width: 50%;
  }
`;
