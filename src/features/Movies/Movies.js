import React from "react";
import { connect } from "react-redux";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

const Movies = ({ error }) => {
  const hasError = () => error !== "";

  return (
    <main>
      <div className="container mx-auto">
        <div className="md:mx-4">
          <MovieSearch />
          {hasError() && <h1 className="text-2xl text-center">{error}</h1>}
          {!hasError() && <MovieList />}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ movies: { error } }) => ({
  error,
});

export default connect(mapStateToProps)(Movies);
