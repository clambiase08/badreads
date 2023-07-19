import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import { AppContext } from "../context/ContextProvider";

export default function AddReview() {
  const { id } = useParams();
  const {books} = useContext(AppContext);

  console.log(books);
  const bookToReview = books.find((book) => book.id === id);

  if (!bookToReview) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <img src={bookToReview.volumeInfo.imageLinks.thumbnail} alt={bookToReview.volumeInfo.title}/>
      <AddReviewForm
        // onAddReview={addReview}
        image={bookToReview.volumeInfo.imageLinks.thumbnail}
      />
    </div>
  );
}
