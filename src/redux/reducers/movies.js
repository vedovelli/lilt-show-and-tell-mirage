import { handle } from "redux-pack";
import { FETCH_MOVIES, RESET_MOVIES } from "../actionTypes";

const initialState = {
  movies: [],
  wasSearched: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return handle(state, action, {
        finish: (state) => {
          if (!action.payload.data) {
            return state;
          }

          return {
            ...state,
            wasSearched: true,
            movies: [
              ...action.payload.data.results.filter(
                ({ backdrop_path }) => !!backdrop_path
              ),
            ],
          };
        },
        failure: (state) => {
          return {
            ...state,
            wasSearched: false,
            error: action.payload.response.data,
          };
        },
      });
    }
    case RESET_MOVIES: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
