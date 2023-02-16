import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./app/index.css";
import { Provider } from "react-redux";
import { setupStore } from "./shared/store/store";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
