import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";

const middlewares = [thunk];//, createLogger({})];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
document.title = "Poli typer";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
