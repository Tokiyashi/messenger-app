import { useAppDispatch, useAppSelector } from "./redux";
import { userSlice } from "../store/reducers/UserSlice";
import { useEffect } from "react";
import firebase from "firebase/compat";
import { User } from "../types/User";
import _, { isNull } from "lodash";
import { DEFAULT_USER } from "../../entities/User/constants/DefaultUser";
import { userService } from "../services/UserService";

export const useListenUser = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const fetchedUser = _.pick(user, Object.keys(DEFAULT_USER)) as User;

      if (isNull(fetchedUser)) {
        dispatch(setUser(null));
        return;
      }
      const foundUserFromCollection = userService.getUserByUid(fetchedUser.uid);
      !foundUserFromCollection && userService.createUser(fetchedUser);
      dispatch(setUser(fetchedUser));
    });
  }, []);
  return { user };
};
