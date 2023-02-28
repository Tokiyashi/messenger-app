import { useEffect } from "react";
import firebase from "firebase/compat";
import { User } from "../types/User";
import _, { isNull } from "lodash";
import { DEFAULT_USER } from "../../constants/DefaultUser";
import { userService } from "../UserService";
import { useUser } from "./user";

export const useListenUser = () => {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const fetchedUser = _.pick(user, Object.keys(DEFAULT_USER)) as User;

      if (isNull(fetchedUser)) {
        setUser(null);
        return;
      }
      const foundUserFromCollection = userService.getUserByUid(fetchedUser.uid);
      !foundUserFromCollection && userService.createUser(fetchedUser);
      setUser(fetchedUser);
    });
  }, []);
  return { user };
};
