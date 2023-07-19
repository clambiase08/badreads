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
const Container = styled.div`
background: #FCF5EA;
padding-top: 50px;
padding-left: 30px;
`;

  return (
    <Container>
      <img src={bookToReview.volumeInfo.imageLinks.thumbnail} alt={bookToReview.volumeInfo.title}/>
      <AddReviewForm
        // onAddReview={addReview}
        image={bookToReview.volumeInfo.imageLinks.thumbnail}
        title={bookToReview.volumeInfo.title}
      />
    </Container>
  );
}
