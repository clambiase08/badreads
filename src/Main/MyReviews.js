import React from 'react'
import Review from './Review'

export default function MyReviews({reviews}) {


  return (
    <div>
      {reviews.map((reviewItem) =>(
        <Review key={reviewItem.id} reviewItem={reviewItem}/>
      ))}
    </div>
  )
}
