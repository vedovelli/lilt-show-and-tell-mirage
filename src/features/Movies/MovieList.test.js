import React from "react";
import { render, screen, renderWithRedux } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import MovieList from "./MovieList";
// import { makeServer } from "../../miragejs";

// let server;

// beforeEach(() => {
//   server = makeServer({ environment: "test" });
// });

// afterEach(() => {
//   server.shutdown();
// });

describe("MovieList", () => {
  it("loads a list of movies when it is provided to the store", () => {
    render(<MovieList />, {
      initialState: {
        movies: [{ id: 1 }],
        wasSearched: true,
      },
    });

    expect(screen.findByTestId("movie-list")).toBeDefined();
  });

  xit("loads 2 movie cards when a list of 2 movie objects is provided", async () => {
    const movies = [];

    renderWithRedux(<MovieList />, {
      movies: {
        movies,
        wasSearched: true,
      },
    });

    expect(await screen.findAllByTestId("movie")).toHaveLength(2);
  });
});
