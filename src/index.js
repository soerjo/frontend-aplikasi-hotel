import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/Routes";

import { Provider } from "react-redux";
import store from "./config/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
