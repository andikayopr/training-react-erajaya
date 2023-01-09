const apiKey = process.env.REACT_APP_API_KEY || "3116cd0e";
const api = `http://www.omdbapi.com/?apikey=${apiKey}&r=json&type=movie`;

export const getMovie = async (movieId) =>
  fetch(`${api}&i=${movieId}&plot=full`)
    .then(res => res.json())
    .then(data => data)

export const searchMovie = (query) =>
  fetch(`${api}&s=${query}`)
    .then(res => res.json())
    .then(data => {
      return {
        results: data.Search,
        total: data.totalResults,
      }
    })
