import React, { useState, useEffect } from "react";
import AvailableBookRow from "./AvailableBookRow";
import MyReviews from "./MyReviews";
import ReviwedBookRow from "./ReviwedBookRow";
import AddReview from "./AddReview";
import styled from "styled-components";

export default function Account({ books }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const Container = styled.div`
    text-align: center;
    margin: 0 auto;
  `;

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <Container>
      <ReviwedBookRow reviews={reviews} />
      <AvailableBookRow books={books} />
      <AddReview books={books} />
      <MyReviews reviews={reviews} />
    </Container>
  );
}
