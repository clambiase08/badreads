import React, { useContext } from 'react';
import AboutBookCard from './AboutBookCard';
import { AppContext } from "../context/ContextProvider";

export default function AboutBookRow() {
  const { books } = useContext(AppContext);
  
  //console.log(books);
  
  let booksDisplay = books.map(book => (
    <AboutBookCard book={book} key={book.id} />
  ));

  return (
    <div>
      {booksDisplay}
    </div>
  );
}
