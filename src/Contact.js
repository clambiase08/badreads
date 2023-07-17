import React from "react";
import image from "./assets/book-contact.png";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import { PiTiktokLogoLight } from "react-icons/pi";
import styled, { css } from "styled-components";

export default function Contact() {
  return (
    <SidebarSaysLayout>
      <Box>
        <h4>FOLLOW US</h4>
        <h1>Meet Our Community</h1>
        <p>Join the @Badreads and share your voice with us</p>
      <div>
        <div>
          <h2>
            <TfiInstagram />
            Instagram
          </h2>
          <p>@Badreads</p>
        </div>
        <div>
          <h2>
            <PiTiktokLogoLight/>
            Tiktok</h2>
          <p>@Badreads</p>
        </div>
        <div>
          <h2>
            <TfiTwitter />
            Twitter</h2>
          <p>@badreads</p>
        </div>
      </div>
      </Box>
      <Box>
      <Image src={image} alt="open book" />
      </Box>
    </SidebarSaysLayout>
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

const SidebarSaysLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 40%) 1fr;
  ${layoutBox};
`;

const Box = styled.div`
  background-color: #fbfbde;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
