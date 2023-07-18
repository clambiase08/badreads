import React from 'react'
import ReviewedBookItem from './ReviewedBookItem'

export default function ReviwedBookRow({reviews}) {

  const reviewedBooks = reviews.map(review => {
    return <ReviewedBookItem key={review.id} review={review} />
  })

  return (
    <div>
      <div>-My Reviewed Books-</div>
      {reviewedBooks}
    </div>
  )
}
