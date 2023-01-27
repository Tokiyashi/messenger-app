import firebase from "firebase/compat";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext } from "react";
import { red } from "@mui/material/colors";
import Pages from "./pages";
import AuthPage from "./pages/AuthPage";
import { useAppSelector} from "./utils/hooks/redux";
import {useListenUser} from "./utils/hooks/user";

//TODO
//sidebar
//state management
//storybook
// tests
//cicd

//TODO
// Add user type.

firebase.initializeApp({
  apiKey: "AIzaSyAe5-dVZWNsogXdeolvcPKvC_lFvf88b10",
  authDomain: "messenger-bf8ac.firebaseapp.com",
  databaseURL:
    "https://messenger-bf8ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "messenger-bf8ac",
  storageBucket: "messenger-bf8ac.appspot.com",
  messagingSenderId: "933451831913",
  appId: "1:933451831913:web2:f6ef9b973ce9a694da20f8",
  measurementId: "G-YK3DXVDL0P",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
 const Context = createContext({ firebase, auth, firestore });

function App() {

  useListenUser()
  const user = useAppSelector(state => state.userReducer.user)
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222222"
      },
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#04674F",
      },
    },
  });

  return (
    <Context.Provider value={{ firebase, auth, firestore }}>
      <ThemeProvider theme={darkTheme}>
        {user ? <Pages /> : <AuthPage />}
      </ThemeProvider>
    </Context.Provider>
  );
}

export { App, Context };
