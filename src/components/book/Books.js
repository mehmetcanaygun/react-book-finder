import React, { useContext } from "react";
import BookItem from "./BookItem";
import Spinner from "../layout/Spinner";
import BookContext from "../../context/book/bookContext";

const Movies = () => {
  const bookContext = useContext(BookContext);
  const { books, loading } = bookContext;

  if (loading) {
    return <Spinner />;
  }

  if (!books) {
    return null;
  } else {
    return (
      <div className="book-list">
        {books.map(book => (
          <BookItem key={book.id} book={book}></BookItem>
        ))}
      </div>
    );
  }
};

export default Movies;
