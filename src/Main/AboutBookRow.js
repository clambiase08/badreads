import React from 'react';
import AboutBookCard from './AboutBookCard';

export default function AboutBookRow({ books }) {
  let booksDisplay = books.map(book => (
    <AboutBookCard book={book} key={book.id} />
  ))

  return (
    <div>
      {booksDisplay}
    </div>
  )
}