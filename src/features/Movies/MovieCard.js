import React from "react";
import { BACKDROP_BASE_URL } from "../../api/movie-api";

const MovieCard = ({ movie }) => (
  <div className="p-4">
    <div className="flex flex-col md:flex-row">
      <div className="flex-shrink-0">
        <img
          className="rounded-lg md:w-56 md:rounded"
          src={`${BACKDROP_BASE_URL}/${movie.backdrop_path}`}
          alt={movie.title}
          title={movie.title}
        />
      </div>
      <div className="w-full md:ml-6">
        <div className="mt-3 text-sm font-bold tracking-wide text-red-600 uppercase md:mt-0">
          {movie.title}
        </div>
        <div className="flex p-2 my-2 text-xs text-gray-500 bg-gray-100 rounded">
          <p className="w-full">
            Rating: <strong>{movie.vote_average}</strong> with{" "}
            {movie.vote_count} votes
          </p>
          <p className="w-full text-right">
            Release date: {new Date(movie.release_date).toLocaleDateString()}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-500">{movie.overview}</p>
      </div>
    </div>
  </div>
);

export default MovieCard;
