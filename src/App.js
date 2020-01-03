import React from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Search from "./components/book/Search";
import Books from "./components/book/Books";
import Footer from "./components/layout/Footer";

import BookState from "./context/book/BookState";
import AlertState from "./context/alert/AlertState";

import "./css/App.css";

function App() {
  return (
    <AlertState>
      <BookState>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Search />
            <Books />
          </div>
          <Footer />
        </div>
      </BookState>
    </AlertState>
  );
}

export default App;
