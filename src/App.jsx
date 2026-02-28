
// This file is the root of my real estate library book application. It is responsible for fetching data from the Open Library API and passing it down to our components as props. It also contains a form component that allows users to search for books.

import { useState, useEffect } from "react";
import "./App.css";
import Library from "./pages/Library";
import Form from "./components/Form";

const API_URL = "https://openlibrary.org/search.json?q=real+estate";

export default function App() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  function getBook() {
    fetch(API_URL)
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
      <Library book={book} />
    </div>
  );
}




/*NO LONGER USEFUL - SEE README.md FOR DETAILS
import { useState, useEffect } from "react";
import "./App.css";



// Import our components
import Library from "./pages/Library";
import Form from "./components/Form";

export default function App() {
  // Constant with your Open Library API URL
 //const apiKey = "########";
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
 useEffect(() => {
    const url = "https://openlibrary.org/search.json?q=real+estate";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // State to hold book data

 // const [book, setBook] = useState(null);

  // Function to get books
  /*async function getBook() {
    const url ="https://openlibrary.org/search.json?q=real+estate";
    try {
    // Make fetch request and store the response
    const response = await fetch(url);
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 
    

    // Parse JSON response into a JavaScript object
    //const data = await response.json();

    const result = await response.json();

    // Set the Book state to the received data
    //setBook(data);
    setBook(result);
  }catch(e) {
    console.error(e);
  }
  };


 // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getBook("real estate");//"Clueless"
  }, []);

*/
/*
  // We pass the getBook function as a prop called booksearch
  // We pass book as props to book display
  return (
    <div className="App">
      <Form booksearch={getBook} />
      <Library book={book} />
    </div>
  );
}
*/