/* eslint-disable jsx-a11y/anchor-is-valid */
import Bookshelf from "./Bookshelf.js";

const Shelves = ({ setShowSearchpage, showSearchPage, books, updateBookOnShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            books={books.filter((book) => book.shelf === "currentlyReading")}
            bookshelfTitle="Currently Reading"
            updateBookOnShelf={updateBookOnShelf}
          />
          <Bookshelf
            books={books.filter((book) => book.shelf === "wantToRead")}
            bookshelfTitle="Want to Read"
            updateBookOnShelf={updateBookOnShelf}
          />
          <Bookshelf
            books={books.filter((book) => book.shelf === "read")}
            bookshelfTitle="Read"
            updateBookOnShelf={updateBookOnShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
};

export default Shelves;
