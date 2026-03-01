
//import "./BookList.css";

export default function BookList({ books }) {
  return books ? (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <h1>{book.title}</h1>
          <h2>{book.author_name ? book.author_name[0] : "Author Unknown"}</h2>
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://via.placeholder.com/150"
            }
            alt={book.title}
          />
          <h2>{book.first_publish_year}</h2>
        </div>
      ))}
    </div>
  ) : (
    <h1>No Books to Display</h1>
  );
}










//MovieDisplay.jsx altered to BookDisplay.jsx
/*
import { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import BookList from "../BookList.jsx";
import "/src/App.css";
import "./BookList.css";

export default function BookList ({ book }) {
  return book ? (
    <>
      <h1>{book.title}</h1>
      <h2>{book.author_name ? book.author_name[0] : "Author Unknown"}</h2>
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/a/olid/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }
        alt={book.title}
      />
      <h2>{book.first_publish_year}</h2>
    </>
  ) : (
    <h1>No Book to Display</h1>
  );
}
*/


/*

*/