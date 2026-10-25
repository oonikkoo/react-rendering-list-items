import "./App.css";
import movies from "./data/movies";

const wantedTitles = ["Assassin's Creed", "Luke Cage", "Doctor Strange"]
const filterMovies = movies.filter(movie => wantedTitles.includes(movie.title))
//console.log(filterMovies)

function App() {
  return (
    <div className="App">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl my-6 font-semibold">
          Movie List Section
        </h1>
        <ul className="flex flex-col gap-4">
          {
            filterMovies.map((movie, index) =>
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
      </section>
    </div>
  );
}

export default App;
