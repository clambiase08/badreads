import React from 'react'
import { NavLink } from'react-router-dom'
import { HiOutlineUserCircle } from'react-icons/hi'
import styled, {css} from'styled-components'

export default function NavBar() {
  return (
      <PancakeStackLayout>
        <Box background="#ecf494">
        Home of the world's worst books
        </Box>
        <Box>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/account">Reviews</NavLink>
        <NavLink to="/account"><HiOutlineUserCircle /></NavLink>
        <NavLink to="/account">
          <button>Write a Review</button>
        </NavLink>
      </nav>
        </Box>
      </PancakeStackLayout>
  )
}

const layoutBox = css`
  width: 100%;
  min-height: 300px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }
`;

const PancakeStackLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${layoutBox};
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  font-weight: bold;
`;

