import Book from "./Book.js";
import React from "react";

const Bookshelf = ({ books, bookshelfTitle, updateBookOnShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBookOnShelf={updateBookOnShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
