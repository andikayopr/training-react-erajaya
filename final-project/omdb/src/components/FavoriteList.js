import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Favorite from "./Favorite";
import { getSavedMovies } from "../utils/moviesUtils";

const FavoriteList = () => {
  
  const movie = getSavedMovies();
  return (
    <>
      {Object.keys(movie) &&
        Object.keys(movie).map((key, idx) => (
          <div
            className="p-5 border rounded-lg border-slate-600 bg-slate-800 text-center"
            key={`movie-item-${movie[key]["imdbID"]}-${idx}`}
          >
            <div>
              <figure className=" relative">
                <img src={movie[key].Poster} alt="" />
                <div>
                  <Favorite movie={movie[key]} />
                </div>
              </figure>
              <NavLink to={`/movie/${movie[key].imdbID}?s=fav`} className="px-5">
                <h2 className="text-white text-lg font-extrabold pt-3 hover:text-cyan-700">
                  {movie[key].Title}
                </h2>
              </NavLink>
              <div className="text-white text-md">{movie[key].Year}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FavoriteList;
