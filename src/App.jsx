import "./App.css";
import MoviesCard from "./components/moviesCard";

function App() {
  return (
    <div className="my-6">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl mb-6 font-semibold">
          Movie List Section
        </h1>
        <MoviesCard />
      </section>
    </div>
  );
}

export default App;
