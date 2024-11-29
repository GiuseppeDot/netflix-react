import "./App.css";
import AllTheFilm from "./components/AllTheFilm";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Spider-Man" />
        <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Creed" />
        <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Marvel" />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
