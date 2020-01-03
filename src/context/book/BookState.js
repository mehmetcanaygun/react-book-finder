import React, { useReducer, useContext } from "react";
import BookContext from "./bookContext";
import AlertContext from "../alert/alertContext";
import BookReducer from "./bookReducer";
import axios from "axios";
import { GET_BOOKS, CLEAN_BOOKS, SET_LOADING } from "../types";

const BookState = props => {
  const initialState = {
    books: [],
    loading: false
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const alertContext = useContext(AlertContext);

  // Get Books
  const getBooks = async query => {
    setLoading();

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    if (res.data.items === undefined) {
      alertContext.setAlert(
        "The book you are looking for was not found",
        "danger"
      );
      dispatch({
        type: GET_BOOKS,
        payload: [
          {
            id: 0,
            volumeInfo: {
              title: "Not Found",
              authors: ["?"],
              publisher: "?",
              publishedDate: "?",
              imageLinks: {
                thumbnail: "./data/question.png"
              },
              infoLink: "./"
            }
          }
        ]
      });
    } else {
      dispatch({
        type: GET_BOOKS,
        payload: res.data.items
      });
    }
  };

  // Clean Books
  const cleanBooks = () => {
    dispatch({
      type: CLEAN_BOOKS
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        getBooks,
        cleanBooks
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
