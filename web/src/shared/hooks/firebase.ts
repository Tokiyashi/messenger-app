import {create} from "zustand";
import firebase from "firebase/compat";

type Store = {
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth
  firebase: any
}
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
export const useFirebase = create<Store>(set => (
  {
  firebase: firebase,
  auth: firebase.auth(),
  firestore: firebase.firestore(),
}))