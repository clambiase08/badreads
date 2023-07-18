import React, { useState, useEffect } from 'react';
import About from './About';
import Account from './Account';
import { Routes, Route } from "react-router-dom";
import AddReview from './AddReview';
import Contact from '../Contact';
import Home from '../Home';

export default function Main() {
  const [books, setBooks] = useState([]);
  const key = 'AIzaSyAkjPer_Cb-OAsgHXPMbRH6I88BGgpQSWg'
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/users/106307065284722752536/bookshelves/0/volumes?key=${key}
    `)
    .then((res) => res.json())
    .then((BookItem) => setBooks(BookItem.items))
  }, [])

  console.log(books);

  
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About books={books}/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/account" element={<Account books={books}/>} />
        <Route path="/account/:id" element={<AddReview books={books}/>} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}
