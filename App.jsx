

//Don't like this code. A search bar appears but takes me nowhere.

/*
import { useState, useEffect } from "react";
import "./App.css";

// Custom debounce hook - this lives OUTSIDE the component, which is correct for custom hooks
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Helper function - also fine outside component since it doesn't use hooks
const formatBookData = (book) => {
  return {
    title: book.title || 'Title Unknown',
    authors: book.author_name || ['Author Unknown'],
    publishYear: book.first_publish_year || 'Year Unknown',
    coverUrl: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
  };
};

export default function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchBooks = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=10`,
        { signal: controller.signal }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBooks(data.docs || []);

    } catch (error) {
      if (error.name === 'AbortError') {
        setError('Request timed out. Please check your connection.');
      } else {
        setError('Failed to fetch books. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto search when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      searchBooks();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for real estate books..."
      />
      <button onClick={searchBooks}>Search</button>

      {loading && <p>Finding amazing books...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {books.map((book, index) => {
        const formatted = formatBookData(book);
        return (
          <div key={index}>
            <h3>{formatted.title}</h3>
            <p>by {formatted.authors[0]}</p>
            <p>{formatted.publishYear}</p>
            {formatted.coverUrl && (
              <img src={formatted.coverUrl} alt={formatted.title} />
            )}
          </div>
        );
      })}
    </div>
  );
}

*/


//Wasted: These steps are outside the component and do not work.
/*
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import BookList from "./components/BookList";

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!searchTerm) return;

    setLoading(true);
    try {
      // This is like asking the librarian: "Show me books about..."
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=10`
      );

      // Wait for the librarian to gather the books
      const data = await response.json();

      // Store the books they brought us
      setBooks(data.docs || []);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={searchBooks}>Search</button>

      {loading && <p>Finding amazing books...</p>}

      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>by {book.author_name?.[0] || 'Unknown Author'}</p>
        </div>
      ))}
    </div>
  );
}


//Handling Search Data

const formatBookData = (book) => {
  return {
    title: book.title || 'Title Unknown',
    authors: book.author_name || ['Author Unknown'],
    publishYear: book.first_publish_year || 'Year Unknown',
    isbn: book.isbn?.[0] || null,
    coverUrl: book.cover_i 
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
    subjects: book.subject?.slice(0, 3) || [], // First 3 subjects only
    pageCount: book.number_of_pages_median || 'Pages Unknown'
  };
};


//Error Handling

const [error, setError] = useState(null);

const searchBooksWithErrorHandling = async () => {
  setLoading(true);
  setError(null);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setBooks(data.docs || []);

  } catch (error) {
    if (error.name === 'AbortError') {
      setError('Request timed out. Please check your connection.');
    } else {
      setError('Failed to fetch books. Please try again.');
    }
  } finally {
    setLoading(false);
  }
};

//Limiting API Requests

// Debounce search to avoid too many API calls
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// In your component
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearchTerm) {
    searchBooks();
  }
}, [debouncedSearchTerm]);

*/


import { useState, useEffect } from "react";
import "./App.css";


// Import our components
import Form from "./components/Form";
import BookList from "./components/BookList";


const API_URL = "https://openlibrary.org/search.json?q=";

const headers = new Headers({
  "User-Agent": "Real Estate Library Book App (shaheed3113@gmail.com)",
});

const options = {
  method: 'GET',
  headers: headers
};

export default function App() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  function getBook(searchTerm = "real+estate") {
    fetch(API_URL + searchTerm, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.docs); // store just the docs array
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
      {loading && <p>Loading...</p>}
      <BookList books={books} />
    </div>
  );
}





//Updated with Open Library's API and added a search form. See README.md for details.
/*
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import LibraryBooks from "./components/BookList"; 

const API_URL = "https://openlibrary.org/search.json?q=";

const headers = new Headers({
  "User-Agent": "Real Estate Library Books (ashaheev@gmail.com)",
});

const options = {
  method: 'GET',
  headers: headers
};

export default function App() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  function getBook(searchTerm = "real+estate") {
    fetch(API_URL + searchTerm, options)
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
      {loading && <p>Loading...</p>}
      {book && book.docs.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.author_name}</p>
        </div>
      ))}
    </div>
  );
}

*/







// This file is the root of my real estate library book application. It is responsible for fetching data from the Open Library API and passing it down to our components as props. It also contains a form component that allows users to search for books.
/*
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import Library from "./components/LibraryBooks";
import Form from "./components/Form";
i

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
*/
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