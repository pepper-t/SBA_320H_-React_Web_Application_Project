//MovieDisplay.jsx altered to BookDisplay.jsx

export default function BookDisplay({ book }) {
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



