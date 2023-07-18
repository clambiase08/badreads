import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import AddReviewForm from './AddReviewForm'

export default function AddReview({books}) {
  const { id } = useParams()
  const bookToReview = books.find(book => book.id === id)
  console.log(bookToReview)

  if (!bookToReview) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{bookToReview.volumeInfo.title}</h1>
    </div>
  )
}
