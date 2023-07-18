import React from 'react'
import AvailableBookItem from './AvailableBookItem'

export default function AvailableBookRow({books}) {
  if (!books || books.length === 0) {
    return <div>No available books.</div>;
  }

  console.log(books)

  const availableBookItem = books.map(book => {
    return <AvailableBookItem key={book.id} book={book} />
  })

  return (
    <div>
      <div>-Choose a Book to Review-</div>
      {availableBookItem}
    </div>
  )
}
