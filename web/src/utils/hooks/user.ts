import { useAppDispatch, useAppSelector } from "./redux";
import { userSlice } from "../../store/reducers/UserSlice";
import { useEffect } from "react";
import firebase from "firebase/compat";
import { User } from "../../common/types/User";
import _ from "lodash";
import { DEFAULT_USER } from "../../common/constants/DefaultUser";

export const useListenUser = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) dispatch(setUser(null));
      dispatch(setUser(_.pick(user, Object.keys(DEFAULT_USER)) as User));
    });
  }, []);
  return { user };
};
