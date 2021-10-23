import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
