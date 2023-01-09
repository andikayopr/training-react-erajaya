export const getSavedMovies = () => {
  const savedMovies = localStorage.getItem("savedMovies") || "{}";
  return typeof savedMovies === "string" ? JSON.parse(savedMovies) : {};
};