import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import styled, { css } from "styled-components";

export default function NavBar() {
  return (
    <PancakeStackLayout>
      <Box color="#ECF494" spacing="center">Home of the world's worst books</Box>
      <Box>
        <Logo>Badreads</Logo>
        <NavLinks>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/account">Reviews</NavLink>
          <NavLink to="/account">
            <UserCircleIcon />
          </NavLink>
          <NavLink to="/account">
            <Button>Write a Review</Button>
          </NavLink>
        </NavLinks>
      </Box>
    </PancakeStackLayout>
  );
}

const layoutBox = css`
  width: 100%;
  min-height: 100px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 1px rgba(0, 0, 0, 0.1);
  }
`;

const PancakeStackLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${layoutBox};
`;

const Box = styled.div`
  background-color: ${(props) => props.color || "#FFFFFF"};
  display: flex;
  align-items: center;
  justify-content: ${props => props.spacing || "space-between"};
  padding: 1rem;
`;

const Logo = styled.h2`
  font-size: 42px;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  gap: 50px;

`;

const UserCircleIcon = styled(HiOutlineUserCircle)`
  height: 24px;
  width: 24px;
  margin-left: 50px;
`;

const Button = styled.button`
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;