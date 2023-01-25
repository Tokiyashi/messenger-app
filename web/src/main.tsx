import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import firebase from "firebase/compat";

const auth = firebase.auth();
const firestore = firebase.firestore();
export const Context = createContext({ firebase, auth, firestore });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>
);
