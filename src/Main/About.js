// About.js
import React from 'react';
import AboutBookRow from './AboutBookRow';

export default function About({ books }) {
  return (
    <div>
      {books && <AboutBookRow books={books} />}
    </div>
  );
}

