import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./Components/DrumSlice/DrumSlice.js";
import App from "./App";

const store = configureStore({
  reducer: {
    drum: drumReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
