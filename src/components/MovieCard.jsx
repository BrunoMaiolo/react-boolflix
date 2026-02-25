function MovieCard({ movie }) {

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : null

  const rating = Math.ceil(movie.vote_average / 2)
  const stars = "⭐".repeat(rating) + "☆".repeat(5 - rating)

  const getFlagUrl = (lang) => {
    if (!lang) return null
    const code = lang === "en" ? "gb" : lang
    return `https://flagcdn.com/w40/${code}.png`
  }

  return (
    <div className="movie-card">
      {posterUrl && <img src={posterUrl} alt={movie.title} />}

      <div className="overlay">
        <h5>{movie.title}</h5>
        <p>Titolo originale: {movie.original_title}</p>

        <p>
          Lingua:{" "}
          <img src={getFlagUrl(movie.original_language)} alt="" />
        </p>

        <p>Voto: {stars}</p>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard