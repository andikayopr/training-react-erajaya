import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import List from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import { searchMovie } from "./services/api";
import logo from "../src/logo.png";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import FavoriteList from "./components/FavoriteList";

function App(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isMovieSingle = !searchQuery && location.pathname !== "/";


  const queryParams = new URLSearchParams(useLocation().search)
  const source = queryParams.get("s")

  const getSavedMovies = () => {
    const savedMovies = localStorage.getItem("savedMovies") || "{}";
    return typeof savedMovies === "string" ? JSON.parse(savedMovies) : {};
  };

  const fetchSavedMovies = () => {
    const favorites = getSavedMovies();

    const savedMovies =
      favorites && Object.keys(favorites).length
        ? Object.keys(favorites)
            .map((key) => favorites[key])
            .filter((item) => item.isSaved)
        : [];

    setSavedMovies(savedMovies);
  };

  const handleSearchChange = (ev) => setSearch(ev.target.value);

  const handleSearchSubmit = (ev) => {
    
    ev.preventDefault();
    if (source === "fav") {
      navigate("/favorite");
    } else {
      navigate("/");
    }

    setSearchQuery(search);
    setIsLoading(true);
    searchMovie(search).then((data) => {
      const movies = Array.isArray(data.results) ? data.results : [];
      setMovies(movies);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  return (
    <div className="App">
      <main className="w-screen bg-slate-900 fixed z-10">
        <div className="container mx-auto p-5">
          <div className="flex justify-center items-center">
            <div>
              <a href="/">
                <img src={logo} width="100" />
              </a>
            </div>
            <div className="flex-1">
              <SearchForm
                submit={handleSearchSubmit}
                change={handleSearchChange}
                value={search}
              />
            </div>
            <div>
              <NavLink to={`/favorite`} className="px-5">
                <button className="text-teal-600 font-extrabold text-sm tracking-widest uppercase underline hover:text-teal-700">
                  Favorites
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
      <section className="pt-32">
        <div className="bg-slate-700">
          <div className="container mx-auto p-5">
            {!isMovieSingle && location.pathname !== "/favorite" && (
              <div>
                {isLoading ? (
                  <div className="h-screen">
                  <Loader />
                  </div>
                ) : movies.length ? (
                  <section className="grid grid-cols-4 gap-4">
                    <List list={movies} />
                  </section>
                ) : (
                  <section className="grid grid-cols-4 gap-4">
                    {searchQuery.length ? (
                      <div className="text-white py-5 ">
                        No movies found for the keyword <b className="text-teal-500">{searchQuery}</b>
                      </div>
                    ) : null}
                  </section>
                )}
              </div>
            )}

            {searchQuery === "" && location.pathname !== "/favorite" && (
              <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                  <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                      Home for <br/> Moviemania & Cinephile
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                      The movie database is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows..
                    </p>

                  </div>
                </div>
              </section>
            )}

            {location.pathname === "/favorite" ? (
              <div>
                {savedMovies && savedMovies.length ? (
                  <section className="grid grid-cols-4 gap-4">
                  <FavoriteList list={savedMovies} />
                  </section>
                ) : (
                  <section className="grid grid-cols-4 gap-4 h-screen">
                  <div className="text-white py-5">No favorite movie saved yet.</div>
                  </section>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
