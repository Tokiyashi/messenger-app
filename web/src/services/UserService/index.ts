import firebase from "firebase/compat";
import { User } from "../../common/types/User";

class UserService {
  getUsers = async () => {
    const result: User[] = [];
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          result.push(doc.data() as User);
        });
      });

    return result;
  };

  createUser = async (user: firebase.User) => {
    if (!!(await this.getUserByUid(user.uid))) {
      return;
    }
    const { displayName, uid, phoneNumber, email, photoURL } = user;
    await firebase.firestore().collection("users").add({
      displayName,
      uid,
      phoneNumber,
      email,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  getUserByUid = async (uid: string) => {
    let result: User | undefined;

    await firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          const user = doc.data() as User;
          if (user.uid === uid) {
            result = user;
          }
        });
      });
    return result;
  };
}

export const userService: UserService = new UserService();
