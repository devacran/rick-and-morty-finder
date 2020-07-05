import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import "./globals.css";
import { initialState } from "./initialState";
import { reducer } from "./reducers";

const store = createStore(reducer, initialState);
const container = document.getElementById("App");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
