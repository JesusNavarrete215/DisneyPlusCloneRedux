import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './app/store'
const domRoot = createRoot(document.getElementById("root"));
const root = createRoot(domRoot);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
