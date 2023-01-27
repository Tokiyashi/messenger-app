import firebase from "firebase/compat";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import User = firebase.User;
import { red } from "@mui/material/colors";
import { Context } from "./main";
import Pages from "./pages";

//TODO
//state management
//storybook
// tests
//cicd

function App() {
  const { auth } = useContext(Context);
  const [user, setUser] = useState<User>();
  // const SignIn = () => {
  //   const signInWithGoogle = () => {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     return auth.signInWithPopup(provider);
  //   };
  //
  //   return <Button onClick={signInWithGoogle}> AUTH </Button>;
  // };

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
      <Pages user={user} />
    </ThemeProvider>
  );
}

export default App;
