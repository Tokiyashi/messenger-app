import firebase from "firebase/compat";
import {Box, Button, createTheme, ThemeProvider} from "@mui/material";
import React, { useEffect, useState } from "react";
import User = firebase.User;
import ChatPage from "./pages/ChatPage";
import {grey, orange, purple, red} from "@mui/material/colors";

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

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  return <Button onClick={signInWithGoogle}> AUTH </Button>;
};

//TODO
// linter
//prettier
//state management
// vite config
//storybook
// tests
//cicd

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user || undefined);
    });
  }, []);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: purple[500]
      }
    }
  })

  return (
      <ThemeProvider theme={theme}>
    <Box className="App">
      {user ? <ChatPage/>: <SignIn/>}
    </Box>
  </ThemeProvider>
  )
}

export default App;
