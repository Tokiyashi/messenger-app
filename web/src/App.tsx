import firebase from "firebase/compat";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import User = firebase.User;
import { red } from "@mui/material/colors";
import { Context } from "./main";
import Pages from "./pages";
import AuthPage from "./pages/AuthPage";

//TODO
//sidebar
//state management
//storybook
// tests
//cicd

function App() {
  const { auth } = useContext(Context);
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
    <ThemeProvider theme={theme}>
      {user ? <Pages user={user} /> : <AuthPage />}
    </ThemeProvider>
  );
}

export default App;
