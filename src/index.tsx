import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
  <Provider store = {createStoreMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.querySelector("#root"));