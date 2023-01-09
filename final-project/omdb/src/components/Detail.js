import React, { useEffect, useState } from "react";

import Favorite from "./Favorite";
import { getMovie } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "./Modal";

function Detail(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);


  const fetchMovie = () => {
    const movieId = id;
    if (movieId && movie && movie.imdbID === movieId) return;

    if (!movieId) return;

    getMovie(movieId).then((movie) => {
      if (movie.Response === "False") {
        navigate({
          pathname: "/",
          state: {
            error: movie.Error,
          },
        });
      } else {
        setMovie(movie);
      }
    });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const asideMovieData = ["Genre", "Runtime", "Year", "Rated", "imdbRating"];
  const contentMovieData = [
    "Writer",
    "Actors",
    "Director",
    "Production",
    "Country",
    "Language",
    "Released",
  ];

  return Object.keys(movie).length ? (
    <Modal>
      <div className="flex flex-row-reverse ">
        <div className="basis-2/3">
          <h1 className="text-cyan-700 text-2xl font-semibold">
            {movie.Title}
          </h1>
          <p className="italic text-white pt-3 pb-6">{movie.Plot}</p>

          {contentMovieData.length &&
            movie &&
            contentMovieData.map((term, idx) => {
              return movie[term] ? (
                <div key={`content-post-data-${movie.imdbID}-${idx}`}>
                  <h2 className="font-bold text-white">{term}</h2>
                  <p className="text-slate-400">{movie[term]}</p>
                </div>
              ) : (
                ""
              );
            })}
        </div>
        <div className="basis-1/3">
          <figure className="relative">
            <img src={movie.Poster} alt="" />
            <div>
              <Favorite movie={movie} />
            </div>
          </figure>

          {asideMovieData.length && movie ? (
            <dl>
              {asideMovieData.map((term, idx) => {
                return movie[term] ? (
                  <div key={`aside-post-data-${movie.imdbID}-${idx}`}>
                    <dt className="font-bold text-white">{term}</dt>
                    <dd className="text-slate-400 font-medium">
                      {movie[term]}
                    </dd>
                  </div>
                ) : (
                  ""
                );
              })}
            </dl>
          ) : (
            <span>No movie</span>
          )}
        </div>
      </div>
    </Modal>
  ) : (
    <span>No movie data</span>
  );
}

export default Detail;
