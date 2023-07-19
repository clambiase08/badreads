import React, { useState, useEffect } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [reviews, setReviews] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const key = "AIzaSyDWgDh6pDGLCTPmZgiBiIGEH4JhTDPnRKc";
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/users/106307065284722752536/bookshelves/0/volumes?key=${key}
    `)
      .then((res) => res.json())
      .then((BookItem) => setBooks(BookItem.items));
  }, []);

  const contextValue = {
    reviews,
    setReviews,
    books,
    setBooks,
    addReview
  };


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
