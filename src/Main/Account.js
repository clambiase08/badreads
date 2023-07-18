import React from 'react'
import AvailableBookRow from './AvailableBookRow'
import MyReviews from './MyReviews'
import ReviwedBookRow from './ReviwedBookRow'
import AddReview from './AddReview'

export default function Account({books}) {

  console.log(books)

  return (
    <div>
      <AvailableBookRow books={books} />
      <ReviwedBookRow books={books} />
      <AddReview />
      <MyReviews />
    </div>
  )
}
