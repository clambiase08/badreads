import React from 'react'
import image1 from './assets/book-table-home.png'
import image2 from './assets/books-home.png'
import { BsChatRightText } from'react-icons/bs'
import { BsStar } from'react-icons/bs'


export default function Home() {
  return (
    <div>
      <h1>Your safe space for really bad books</h1>
      <span>
        <img src={image2} alt="stack of books" />
        <img src={image1} alt="book on table"/>
      </span>
      <div>
        <span>
          <h4><BsChatRightText /> Your rants, available online</h4>
          <p>Be honest about your least favorite books and tell us how you really feel</p>
          </span>
          <span>
          <h4><BsStar /> Creating Space</h4>
          <p>Get out those bad feelings with personalized reviews, ratings, and attribute tags</p>
          </span>
      </div>

    </div>
  )
}
