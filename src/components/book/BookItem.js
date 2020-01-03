import React from "react";

const BookItem = ({ book: { volumeInfo } }) => {
  const {
    imageLinks,
    infoLink,
    title,
    authors,
    publisher,
    publishedDate
  } = volumeInfo;

  return (
    <div className="book-item box-shadow">
      <div className="book-item__cover">
        <img
          src={imageLinks ? imageLinks.thumbnail : "./files/book.jpg"}
          className="box-shadow"
          alt="book-cover"
        />
      </div>
      <div className="book-item__info">
        <a href={infoLink} className="book-item__info__title">
          {title}
        </a>
        <div>
          <p className="book-item__info__authors">
            <strong>Authors:</strong> {authors && authors.join(", ")}
          </p>
          <p className="book-item__info__publisher">
            <strong>Publisher:</strong> {publisher}
          </p>
          <p className="book-item__info__pub-date">
            <strong>Published Date:</strong> {publishedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
