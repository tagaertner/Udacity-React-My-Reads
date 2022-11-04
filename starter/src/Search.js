import React from "react";
import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";

export default function Search({ showSearchPage, setShowSearchpage, updateBookOnShelf, allBooks }) {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);
  const findBooks = (e) => {
    setSearchBook(e);
  };
  useEffect(() => {
    if (searchBook !== "") {
      search(searchBook, 1).then((results) => {
        let ok = Array.isArray(results);
        if (ok) {
          setBooks(
            results.map((result) => {
              const found = allBooks.find((b) => {
                return result.id === b.id;
              });
              return (
                found ?? {
                  ...result,
                  shelf: "none",
                }
              );
            })
          );
        } else {
          setBooks([]);
        }
      });
    } else {
      setBooks([]);
    }
  }, [searchBook]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => setShowSearchpage(!showSearchPage)}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            defaultValue={searchBook}
            onChange={(e) => findBooks(e.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
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
}
