import React, { useState } from 'react';

// Main App Component that holds everything
function App() {
  // State for the list of movies. Starts as an empty list. [cite: 58]
  const [movies, setMovies] = useState([]);

  // State for the form inputs
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  // --- Functions to handle events ---

  // Function to add a new movie to the list
  const handleAddMovie = () => {
    // Basic validation to ensure movie name is not empty
    if (movieName.trim() === '') {
      alert('Please enter a movie name!');
      return;
    }

    const newMovie = {
      // Use timestamp for a unique id
      id: Date.now(),
      name: movieName,
      review: review,
      rating: rating,
    };

    // Update the movies state with the new movie [cite: 65]
    setMovies([...movies, newMovie]);

    // Clear the input fields after adding
    setMovieName('');
    setReview('');
    setRating(1);
  };

  // Function to remove a movie by its id
  const handleRemoveMovie = (movieIdToRemove) => {
    // Create a new list that excludes the movie with the matching id
    const updatedMovies = movies.filter(movie => movie.id !== movieIdToRemove);
    // Update the state with the new, filtered list
    setMovies(updatedMovies);
  };

  // --- Component's UI ---
  // This is the JSX that describes what the UI looks like [cite: 29]
  return (
    // Simple inline styles are used for layout and appearance [cite: 43]
    <div style={{ fontFamily: 'sans-serif', width: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>My Movie Watchlist 🍿</h1>

      {/* Form for Adding a New Movie */}
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Movie Title"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          style={{ padding: '8px' }}
        />
        <input
          type="text"
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ padding: '8px' }}
        />
        <div>
          <label>Rating: </label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} style={{ padding: '8px' }}>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button onClick={handleAddMovie} style={{ padding: '10px', backgroundColor: 'tomato', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Movie
        </button>
      </div>

      {/* Displaying the List of Movies */}
      <div>
        <h2>Saved Movies</h2>
        {/* We use .map() to create a UI element for each movie in our list [cite: 50] */}
        {movies.map((movie) => (
          // The 'key' is important for React to identify each item
          <div key={movie.id} style={{ border: '1px solid #eee', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
            <h3 style={{ marginTop: 0 }}>{movie.name}</h3>
            {/* Display rating using star emojis as required [cite: 90] */}
            <p style={{ color: '#f5c518', fontSize: '1.2em' }}>{'⭐'.repeat(movie.rating)}</p>
            {/* Display the review comment [cite: 88] */}
            <p><strong>Review:</strong> {movie.review}</p>
            <button onClick={() => handleRemoveMovie(movie.id)} style={{ backgroundColor: '#555', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// In a real React setup, you would export this component.
// export default App;