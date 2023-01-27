import {useAppDispatch, useAppSelector} from "./redux";
import {userSlice} from "../../store/reducers/UserSlice";
import {useEffect} from "react";
import firebase from "firebase/compat";

export const useListenUser = () =>{
  const { user } = useAppSelector((state) => state.userReducer);
  const { setUser } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
  }, []);
  return {user}
}