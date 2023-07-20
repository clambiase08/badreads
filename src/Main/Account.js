import React from "react";
import AvailableBookRow from "./AvailableBookRow";
import MyReviews from "./MyReviews";
import ReviwedBookRow from "./ReviwedBookRow";
import styled from "styled-components";

export default function Account() {

  return (
    <Container>
      <h1>Hi there, Christina.</h1>
      <ReviwedBookRow/>
      <AvailableBookRow />
      <MyReviews />
    </Container>
  );
}
  const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    background-color: #F4EDF5;

    >h1 {
      font-size: 48px;
      padding-bottom: 75px;
      padding-top: 20px;
      font-weight: 300;
    }
  `;
