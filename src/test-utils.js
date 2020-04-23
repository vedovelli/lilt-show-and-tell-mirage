import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import reducer, {
  initialState as reducerInitialState,
} from "./redux/reducers/movies";

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

export const renderWithRedux = (component, initialState) => {
  const store = createStore(reducer, initialState);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
