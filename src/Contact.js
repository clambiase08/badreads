import React from "react";
import image from "./assets/book-contactv2.png";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import { PiTiktokLogoLight } from "react-icons/pi";
import styled, { css } from "styled-components";

export default function Contact() {
  return (
    <SidebarSaysLayout>
      <Box>
        <ContentWrapper>
          <h4>FOLLOW US</h4>
          <h1 className="title">Meet Our Community</h1>
          <p className="paragraph">
            Join the @Badreads and share your voice with us
          </p>
        </ContentWrapper>
        <SocialMediaBox>
          <div className="social-div">
            <TfiInstagram size={25} />
            <div>
              <h2>Instagram</h2>
              <p>@Badreads</p>
            </div>
          </div>
          <div className="social-div">
            <PiTiktokLogoLight size={25} />
            <div>
              <h2>Tiktok</h2>
              <p>@Badreads</p>
            </div>
          </div>
          <div className="social-div">
            <TfiTwitter size={25} />
            <div>
              <h2>Twitter</h2>
              <p>@badreads</p>
            </div>
          </div>
        </SocialMediaBox>
      </Box>
      <ImageBox>
        <Image src={image} alt="open book" />
      </ImageBox>
    </SidebarSaysLayout>
  );
}

const layoutBox = css`
  width: 100%;
  min-height: 100px;
  resize: both;
  overflow: auto;

  > * {
    border: 1px rgba(0, 0, 0, 0.1);
  }
`;

const SidebarSaysLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 50%) 1fr;
  ${layoutBox};
`;

const Box = styled.div`
  background-color: #fbfbde;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* Space between h4, h1, and p tags */

  .title {
    font-size: 48px;
    font-weight: 300;
  }

  .paragraph {
    font-size: 20px;
    font-weight: 200;
  }
`;

const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Space between social media items */

  .social-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem; /* Space between social media icon and text */

    > div > h2 {
      font-size: 28px;
      font-weight: 300;
    }

    > div > p {
      font-size: 16px;
      font-weight: 200;
    }
  }
`;

const ImageBox = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  align-self: center;
`;
