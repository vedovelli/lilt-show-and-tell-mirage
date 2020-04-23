import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, wasSearched }) => (
  <div className="mb-16">
    {wasSearched && movies.length === 0 && (
      <h3
        data-testid="no-results"
        className="py-6 mt-3 text-center shadow sm:rounded-lg xl:mx-3 bg-gray-50"
      >
        No movie found
      </h3>
    )}
    {wasSearched && movies.length > 0 && (
      <ul
        data-testid="movie-list"
        className="m-0 mt-3 xl:grid xl:grid-cols-2 xl:gap-4"
      >
        {movies.map((movie) => (
          <li className="p-1 mx-0 mb-3 bg-white shadow cursor-pointer xl:mx-3 sm:rounded-lg xl:justify-between">
            <MovieCard key={movie.id} data-testid="movie-card" movie={movie} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const mapStateToProps = ({ movies: { movies, wasSearched } }) => ({
  movies,
  wasSearched,
});

export default connect(mapStateToProps)(MovieList);
