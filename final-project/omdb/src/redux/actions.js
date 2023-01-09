export const UPDATE_FAVORITE = "UPDATE_FAVORITE";
export const FETCH_FAVORITES = "FETCH_FAVORITES";

const getSavedMovies = () => {
  const savedMovies = localStorage.getItem("savedMovies") || "{}";
  return typeof savedMovies === "string" ? JSON.parse(savedMovies) : {};
};

export const fetchFavorites = (callback) => (dispatch) => {
  const savedMovies = getSavedMovies();
  dispatch(fetchFavoritesAction(savedMovies));
  console.log(callback)
  if (callback) {
    callback(savedMovies);
    console.log(savedMovies, "saveddd")
  }
};

export const updateFavorite =
  ({ movieId, isSaved, movieData }, callback) =>
  (dispatch) => {
    const savedMovies = getSavedMovies();
    const moviesData = savedMovies;

    moviesData[movieId] = {
      ...movieData,
      isSaved,
    };

    if (!isSaved) {
      delete moviesData[movieId];
    }

    localStorage.setItem("savedMovies", JSON.stringify(moviesData));
    dispatch(updateFavoriteAction({ movieId, isSaved, movieData }));
    if (callback) {
      callback({ movieId, isSaved });
    }
  };

const fetchFavoritesAction = (favorites) => {
  return {
    type: FETCH_FAVORITES,
    favorites,
  };
};

const updateFavoriteAction = ({ movieId, isSaved, movieData }) => {
  return {
    type: UPDATE_FAVORITE,
    movieId,
    isSaved,
    movieData,
  };
};
