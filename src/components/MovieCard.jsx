function MovieCard({ movie }) {
    const getFlagUrl = (lang) => {
  if (!lang) return null;

  const code = lang === "en" ? "gb" : lang; 
  return `https://flagcdn.com/w40/${code}.png`;
};
  return (
    <li className="list-group-item">
      <h5>{movie.title || movie.name}</h5>
      <p>Titolo originale: {movie.original_title || movie.original_name}</p>
      <p>
        Lingua:{" "}
         {getFlagUrl(movie.original_language) ? (
          <img
             src={getFlagUrl(movie.original_language)}
              alt={movie.original_language}
         />
            ) : (
               movie.original_language
      )}
      </p>
      <p>Voto: {movie.vote_average}</p>
    </li>
  );
}

export default MovieCard;