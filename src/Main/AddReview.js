import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";

export default function AddReview() {
  const { id } = useParams();
  const books = useOutletContext();
  console.log(books);
  const bookToReview = books.find((book) => book.id === id);

  if (!bookToReview) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <img src={bookToReview.volumeInfo.imageLinks.thumbnail} />
      <AddReviewForm
        // onAddReview={addReview}
        image={bookToReview.volumeInfo.imageLinks.thumbnail}
      />
    </div>
  );
}
