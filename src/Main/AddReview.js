import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import { AppContext } from "../context/ContextProvider";
import { styled } from "styled-components";

export default function AddReview() {
  const { id } = useParams();
  const {books} = useContext(AppContext);

  console.log(books);
  const bookToReview = books.find((book) => book.id === id);

  if (!bookToReview) {
    return <div>...Loading</div>;
  }
  
  return (
    <Container>
      {/* <img src={bookToReview.volumeInfo.imageLinks.thumbnail} alt={bookToReview.volumeInfo.title}/> */}
      <AddReviewForm
        image={bookToReview.volumeInfo.imageLinks.thumbnail}
        title={bookToReview.volumeInfo.title}
      />
    </Container>
  );
}
    const Container = styled.div`
    background-color: #F4EDF5;
    padding-top: 50px;
    padding-left: 30px;
    min-height: 650px;
    `;
