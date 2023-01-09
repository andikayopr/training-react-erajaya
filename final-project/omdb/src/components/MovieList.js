import React from "react";
import { NavLink } from "react-router-dom";
import Favorite from "./Favorite";

const List = (props) => {
  const { list } = props;
  return (
    <>
      {list &&
        list.map((movie, idx) => (
          <div
            className="p-5 border rounded-lg border-slate-600 bg-slate-800 text-center"
            key={`movie-item-${movie.imdbID}-${idx}`}
          >
            <div>
              <figure className=" relative">
                <img src={movie.Poster} alt="" />
                <div>
                  <Favorite movie={movie} />
                </div>
              </figure>
              <NavLink to={`/movie/${movie.imdbID}?s=home`} className="px-5">
                <h2 className="text-white text-lg font-extrabold pt-3 hover:text-cyan-700">
                  {movie.Title}
                </h2>
              </NavLink>
              <div className="text-white text-md">{movie.Year}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default List;
