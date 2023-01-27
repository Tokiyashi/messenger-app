import firebase from "firebase/compat";
import User = firebase.User;

class UserService {
  getUsers = async () => {
    const result: User[] = [];
    const users = await firebase
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

  createUser = async (user: User) => {
    console.log(user.toJSON());
    await firebase
      .firestore()
      .collection("users")
      .add(JSON.parse(JSON.stringify(user.toJSON())));
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
