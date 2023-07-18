import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AvailableBookItem({ book, id }) {
  const BookItem = styled.div`
    position: relative;
    flex: 0 0 auto;
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `;

const BookTitle = styled.h3`
  font-weight: bold;
  font-size: 10px;
  margin-top: 5px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  text-overflow: ellipsis;
`;

  const BookImage = styled.img`   
    height: auto;
  `;

  const BookDescriptionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #FCF5EA;
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  `;

  const BookLink = styled(Link)`
    position: relative;
    display: block;
    &:hover ${BookDescriptionContainer} {
      opacity: 1;
      visibility: visible;
    }
  `;

  return (
    <BookItem>
      <BookLink to={`/account/${id}`}>
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <BookImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <BookDescriptionContainer>
          <div>{book.volumeInfo.description}</div>
        </BookDescriptionContainer>
      </BookLink>
    </BookItem>
  );
}
