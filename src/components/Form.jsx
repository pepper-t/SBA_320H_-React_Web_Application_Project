
import { useState, useEffect } from "react";
import "/src/App.css";

import LibraryBooks from "./LibraryBooks";
import Form from "../components/Form";

const API_URL = "https://openlibrary.org/search.json?q=";

export default function App() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  function getBook(searchTerm = "real+estate") {
    fetch(API_URL + searchTerm)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="App">
      <Form booksearch={getBook} />
      <LibraryBooks book={book} />
    </div>
  );
}









/*
import React, {useState, useEffect} from "react";

export default function Form (props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to booksearch prop, which is App's getBook function
    props.booksearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
  */