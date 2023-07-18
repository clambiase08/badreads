import React from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";

export default function AddReview({ books, addReview }) {
  const { id } = useParams();
  const bookToReview = books.find((book) => book.id === id);
  console.log(bookToReview);

  if (!bookToReview) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <img src={bookToReview.volumeInfo.imageLinks.thumbnail} />
      <AddReviewForm onAddReview={addReview} />
    </div>
  );
}
