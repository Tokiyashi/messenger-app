import firebase from "firebase/compat";
import React, {useEffect, useState} from "react";
import {Box, Button} from "@mui/material";
import User = firebase.User;


firebase.initializeApp({
  apiKey: "AIzaSyAe5-dVZWNsogXdeolvcPKvC_lFvf88b10",
  authDomain: "messenger-bf8ac.firebaseapp.com",
  databaseURL: "https://messenger-bf8ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "messenger-bf8ac",
  storageBucket: "messenger-bf8ac.appspot.com",
  messagingSenderId: "933451831913",
  appId: "1:933451831913:web2:f6ef9b973ce9a694da20f8",
  measurementId: "G-YK3DXVDL0P"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


const SignIn = () =>{
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider)
  }

  return (<Button onClick={signInWithGoogle}> AUTH </Button>)
}

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
    firebase.auth().onAuthStateChanged(user => {
       setUser(user || undefined);
    })
  }, [])


  return (
    <Box className="App">
      {user ? <div>asdasd </div>: <SignIn/>}
    </Box>
  )
}

export default App
