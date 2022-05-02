import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./i18n";
import { Suspense } from "react";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="Loading">
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
