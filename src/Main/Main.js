import React, { useState, useEffect } from "react";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import AccountContainer from "./AccountContainer";
import Account from "./Account";
import AddReview from "./AddReview";

export default function Main() {
  const [books, setBooks] = useState([]);
  const key = "AIzaSyDWgDh6pDGLCTPmZgiBiIGEH4JhTDPnRKc";
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/users/106307065284722752536/bookshelves/0/volumes?key=${key}
    `)
      .then((res) => res.json())
      .then((BookItem) => setBooks(BookItem.items));
  }, [key]);

  // console.log(books);

  return (
    <div>
      <Routes>
        <Route path="/about" element={<About books={books} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<AccountContainer books={books} />} />
          
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}
