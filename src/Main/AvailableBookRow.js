import React from 'react'
import AvailableBookItem from './AvailableBookItem'

export default function AvailableBookRow({books}) {
  if (!books || books.length === 0) {
    return <div>No available books.</div>;
  }

  const availableBookItem = books.map(book => {
    return <AvailableBookItem key={book.id} book={book} id={book.id} />
  })

  return (
    <div>
      <div>-Choose a Book to Review-</div>
      {availableBookItem}
    </div>
  )
}
