import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { API_KEY, API_URL } from "./config/api";

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
          <li key={movie.id} className="list-group-item">
            <h5>{movie.title}</h5>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App