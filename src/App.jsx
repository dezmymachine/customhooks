import React from "react";
import useQueryPopular from "./hooks/useQueryPopular";

const App = () => {
  const { results } = useQueryPopular();

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-container">
        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Popularity: {movie.popularity}</p>
            {/* You can add more details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
