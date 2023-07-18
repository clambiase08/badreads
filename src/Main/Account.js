import React from "react";
import AvailableBookRow from "./AvailableBookRow";
import MyReviews from "./MyReviews";
import ReviwedBookRow from "./ReviwedBookRow";
import styled from "styled-components";

export default function Account({books, reviews}) {

  return (
    <Container>
      <ReviwedBookRow reviews={reviews} />
      <AvailableBookRow books={books} />
      <MyReviews reviews={reviews} />
    </Container>
  );
}
  const Container = styled.div`
    text-align: center;
    margin: 0 auto;
  `;
