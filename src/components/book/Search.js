import React, { useState, useContext } from "react";
import BookContext from "../../context/book/bookContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const bookContext = useContext(BookContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const getData = () => {
    if (text === "") {
      alertContext.setAlert("Please enter something", "danger");
    } else {
      bookContext.getBooks(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="search-box">
      <form>
        <input
          type="text"
          name="text"
          className="search-box__text"
          value={text}
          onChange={onChange}
          placeholder="Title, author, etc..."
        />
        <input
          type="button"
          className="search-box__submit"
          value="Search"
          onClick={getData}
        />
      </form>
      {bookContext.books.length > 0 && (
        <button
          className="search-box__clean box-shadow"
          onClick={() => {
            bookContext.cleanBooks();
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      )}
    </div>
  );
};

export default Search;
