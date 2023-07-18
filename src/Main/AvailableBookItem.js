import React from 'react'
import {Link} from "react-router-dom"

export default function AvailableBookItem({book, id}) {


  return (
    <div>
      <Link to={`/account/${id}`}>
      <img src={book.volumeInfo.imageLinks.thumbnail}/>
       </Link>
    </div>
  )
}
