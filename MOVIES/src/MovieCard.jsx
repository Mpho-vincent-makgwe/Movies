

const MovieCard = ( {movie} ) => {
  return (
    <div>
        {movie.map((movies) => {
        <>
        <h2>{movies.title}</h2>
      <p>{movies.description}</p>
      <p>Release Date: {movies.releaseDate}</p>
      <img src={movies.posterUrl} alt={movies.title} />
        </>
    })
    }</div>
  );
};

export default MovieCard;
