import React from 'react'

export default function AvailableBookItem({book}) {


  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail}/>
    </div>
  )
}
