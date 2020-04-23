import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies, resetMovies } from "../../redux/actions";

const MovieSearch = (props) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term === "") {
      props.resetMovies();
    }
  }, [term, props]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    props.fetchMovies(term);
  };

  return (
    <div className="mt-3">
      <form
        onSubmit={submitHandler}
        data-testid="search-form"
        className="flex mx-2 mt-1 rounded-md shadow-sm xl:w-1/2 md:mx-auto"
      >
        <div className="relative flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1
            1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            data-testid="search-input"
            value={term}
            onChange={(ev) => setTerm(ev.target.value)}
            type="search"
            className="block w-full pl-10 transition duration-150 ease-in-out rounded-none form-input rounded-l-md sm:text-sm sm:leading-5"
            placeholder="Digite o título do filme"
          />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-r-md bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
        >
          <svg
            className="w-6 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1
          0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = { fetchMovies, resetMovies };

export default connect(null, mapDispatchToProps)(MovieSearch);
