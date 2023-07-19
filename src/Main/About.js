// About.js
import React from "react";
import AboutBookRow from "./AboutBookRow";
import { styled } from "styled-components";

const Header = styled.header`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 50px;
  font-size: 1.5em;
`;
const Hashtag = styled.p`
  text-align: center;
  margin: 0 auto;
  padding-top: 70px;
  font-weight: bold;
  font-size: 10px;
`;
const Container = styled.div`
background-color: rgba(252, 245, 234, 1);
`;

export default function About() {
  return (
    <Container>
      <Hashtag>#DESIGNED TO DNF</Hashtag>
      <Header>Discover your least favorite book.</Header>
      <AboutBookRow />
      <Header>Tells us how bad they are, because they deserve it.</Header>
    </Container>
  );
}
