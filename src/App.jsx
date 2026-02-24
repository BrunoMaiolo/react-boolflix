import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { API_KEY, API_URL } from "./config/api";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

 const fetchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
  );

  const data = await response.json();
  setMovies(data.results);
};

  return (
    <div className="container py-4">
      <h1 className="mb-4">Boolflix 🎬</h1>

      <SearchBar onSearch={fetchMovies} />

      <ul className="list-group">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}


export default App