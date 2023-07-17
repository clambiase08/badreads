import React, { useState, useEffect } from 'react';
import About from './About';
import Account from './Account';

export default function Main() {
  const [books, setBooks] = useState([]);
  const key = 'AIzaSyAkjPer_Cb-OAsgHXPMbRH6I88BGgpQSWg'
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/users/106307065284722752536/bookshelves/0/volumes?key=${key}
    `)
    .then((res) => res.json())
    .then((BookItem) => setBooks(BookItem.items))
  }, [])

  
  return (
    <div>
     <About books={books} />
    </div>
  );
}
