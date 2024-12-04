import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllTheFilm from "./components/AllTheFilm";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Routes>
            <>
              <Route
                path="/"
                element={
                  <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Spider-Man" />
                }
              />
              <Route
                path="/Spider-Man"
                element={
                  <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Spider-Man" />
                }
              />

              <Route
                path="/Creed"
                element={
                  <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Creed" />
                }
              />
              <Route
                path="/Marvel"
                element={
                  <AllTheFilm fetch="http://www.omdbapi.com/?apikey=be0ad7de&s=Marvel" />
                }
              />
            </>
          </Routes>
        </main>
        <footer>
          <CustomFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
