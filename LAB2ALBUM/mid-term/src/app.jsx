import React, { useState } from 'react';
import './App.css';
import books from './data';

function App() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app">
      <div className="book-list">
        <ul>
          {books.map((book) => (
            <li
              key={book.id}
              onClick={() => handleBookClick(book)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={book.coverImg}
                alt={book.name}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
              {book.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="book-details">
        <div className="book-cover">
          <img
            src={selectedBook.coverImg}
            alt={selectedBook.name}
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        </div>
        <div className="book-info">
          <h1>{selectedBook.name}</h1>
          <p>Author: {selectedBook.author}</p>
          {selectedBook.coAuthor && <p>Co-Author: {selectedBook.coAuthor}</p>}
          <p>Sequels:</p>
          <ul>
            {selectedBook.sequels.map((sequel, index) => (
              <li key={index}>{sequel}</li>
            ))}
          </ul>
          <p>Rating: {Array(selectedBook.rating).fill('★').join(' ')}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
