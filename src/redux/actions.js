import { FETCH_MOVIES, RESET_MOVIES } from "./actionTypes";
import { fetchMovies as fetchMoviesApi } from "../api/movie-api";

export const fetchMovies = (term) => ({
  type: FETCH_MOVIES,
  promise: fetchMoviesApi(term),
});

export const resetMovies = () => ({
  type: RESET_MOVIES,
});
