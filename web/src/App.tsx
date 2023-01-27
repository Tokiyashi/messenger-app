import firebase from "firebase/compat";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import User = firebase.User;
import { red } from "@mui/material/colors";
import Pages from "./pages";
import AuthPage from "./pages/AuthPage";

//TODO
//sidebar
//state management
//storybook
// tests
//cicd

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
  const [user, setUser] = useState<User>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user || undefined);
    });
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
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
      <ThemeProvider theme={theme}>
        {user ? <Pages user={user} /> : <AuthPage />}
      </ThemeProvider>
    </Context.Provider>
  );
}

export { App, Context };
