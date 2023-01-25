import firebase from "firebase/compat";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import User = firebase.User;
import ChatPage from "./pages/ChatPage";
import { orange, red } from "@mui/material/colors";
import { Context } from "./main";

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

//TODO
//state management
//storybook
// tests
//cicd

function App() {
  const { auth } = useContext(Context);
  const [user, setUser] = useState<User>();
  const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      return auth.signInWithPopup(provider);
    };

    return <Button onClick={signInWithGoogle}> AUTH </Button>;
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user || undefined);
    });
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: orange[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {user ? <ChatPage user={user} /> : <SignIn />}
    </ThemeProvider>
  );
}

export default App;
