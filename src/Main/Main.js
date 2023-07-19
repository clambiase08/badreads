import React from "react";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import AccountContainer from './AccountContainer';

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
       </Routes>
      <AccountContainer/>
    </div>
  );
}
