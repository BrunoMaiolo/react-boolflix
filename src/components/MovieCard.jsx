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
    <li className="list-group-item">

      {posterUrl && (
        <img
          src={posterUrl}
          alt={movie.title}
          style={{ width: "150px", marginBottom: "10px" }}
        />
      )}

      <h5>{movie.title}</h5>
      <p>Titolo originale: {movie.original_title}</p>

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

      <p>Voto: {stars}</p>
    </li>
  )
}

export default MovieCard