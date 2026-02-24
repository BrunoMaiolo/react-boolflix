function MovieCard({ movie }) {
  return (
    <li className="list-group-item">
      <h5>{movie.title}</h5>
      <p>Titolo originale: {movie.original_title}</p>
      <p>Lingua: {movie.original_language}</p>
      <p>Voto: {movie.vote_average}</p>
    </li>
  );
}

export default MovieCard;