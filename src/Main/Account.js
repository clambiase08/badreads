import React, { useState, useEffect } from "react";
import AvailableBookRow from "./AvailableBookRow";
import MyReviews from "./MyReviews";
import ReviwedBookRow from "./ReviwedBookRow";
import AddReview from "./AddReview";

export default function Account({ books }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <ReviwedBookRow reviews={reviews} />
      <AvailableBookRow books={books} />
      <AddReview books={books} addReview={addReview} />
      <MyReviews reviews={reviews} />
    </div>
  );
}
