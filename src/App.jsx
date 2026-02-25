import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { API_KEY, API_URL } from "./config/api";
import MovieCard from "./components/MovieCard";
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

 const fetchMovies = async (query) => {

  const movieRes = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
  );

  const tvRes = await fetch(
    `${API_URL}/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`
  );

  const movieData = await movieRes.json();
  const tvData = await tvRes.json();

  setMovies([...movieData.results, ...tvData.results]);
};

  return (
      <>
    
    <header className="navbar">
      <div className="logo">BOOLFLIX</div>
      <SearchBar onSearch={fetchMovies} />
    </header>

    
    <div className="container">
      <ul className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  </>
);
}


export default App