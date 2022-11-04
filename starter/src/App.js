/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useEffect, useState } from "react";
import Shelves from "./Shelves";
import { getAll, update } from "./BooksAPI.js";
import Search from "./Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((book) => {
      setBooks(book);
    });
  }, []);

  const updateBookOnShelf = (book, bookOnShelves) => {
    update(book, bookOnShelves).then(() => {
      const newBook = { ...book, shelf: bookOnShelves };
      setBooks((books) => books.filter((a) => a.id !== book.id).concat(newBook));
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          setShowSearchpage={setShowSearchpage}
          updateBookOnShelf={updateBookOnShelf}
          showSearchPage={showSearchPage}
          allBooks={books}
        />
      ) : (
        <Shelves
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          books={books}
          updateBookOnShelf={updateBookOnShelf}
        />
      )}
    </div>
  );
}

export default App;
