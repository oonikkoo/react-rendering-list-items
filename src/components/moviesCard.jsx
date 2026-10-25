import movies from "../data/movies"

function MoviesCard() {
  return (
    <ul className="flex flex-col gap-4">
      {
        movies.map((movie, index) =>
          <li
            key={index}
            className="flex gap-4 bg-black rounded-xl p-4 shadow-md"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-24 w-28 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <p>Title: {movie.title}</p>
              <p>Year: {movie.year}</p>
              <p>Runtime: {movie.runtime}</p>
              <div className="flex flex-wrap items-center gap-1">
                Genres:
                {movie.genres.map(genre =>
                  <span
                    key={genre}
                    className="bg-orange-100 text-orange-700 rounded-full px-2 py-0.5"
                  >
                    {genre}
                  </span>
                )}
              </div>
              <p>IMDB Ratings: {movie.imdbRating}</p>
              <p>IMDB Votes: {movie.imdbVotes}</p>
            </div>
          </li>
        )
      }
    </ul>
  )
}

export default MoviesCard