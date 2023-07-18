import React from 'react'

export default function ReviewedBookItem({review}) {


  return (
    <div>
      <img src={review.image} alt={review.title} />
    </div>
  )
}
