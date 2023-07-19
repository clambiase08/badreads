import React from "react";
import AvailableBookRow from "./AvailableBookRow";
import MyReviews from "./MyReviews";
import ReviwedBookRow from "./ReviwedBookRow";
import styled from "styled-components";

export default function Account() {

  return (
    <Container>
      <ReviwedBookRow/>
      <AvailableBookRow />
      <MyReviews />
    </Container>
  );
}
  const Container = styled.div`
    text-align: center;
    margin: 0 auto;
  `;
