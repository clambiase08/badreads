import React from "react";
import image from "./assets/book-contact.png";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import { PiTiktokLogoLight } from "react-icons/pi";

export default function Contact() {
  return (
    <div>
      <div>
        <h4>FOLLOW US</h4>
        <h1>Meet Our Community</h1>
        <p>Join the @Badreads and share your voice with us</p>
      </div>
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
      <img src={image} alt="open book" />
    </div>
  );
}
