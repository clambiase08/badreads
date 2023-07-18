import React, { useState, useEffect } from "react";
import Account from "./Account";
import AddReview from "./AddReview";
import { Route, Routes } from "react-router-dom";

export default function AccountContainer({ books }) {
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
    <Routes>
      <Route path="/account" element={<Account books={books} reviews={reviews}/>} />
      <Route path="/account/:id" element={<AddReview  />} />
    </Routes>
  );
}
