import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../App";
import { Query } from "@firebase/firestore-types";
import { User } from "../../../../common/types/User";
import UserItem from "./UserItem";

const UserList = () => {
  const { firestore } = useContext(Context);
  const [users, setUsers] = useState<User[]>([]);
  const query: Query = firestore
    .collection("users")
    .orderBy("displayName")
    .limitToLast(18);

  useEffect(() => {
    query.onSnapshot((querySnapshot) => {
      const items: User[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as User);
      });
      setUsers(items);
    });
  }, []);

  const userItems = users.map((user) => (
    <UserItem key={user.uid} user={user} />
  ));

  return <>{userItems}</>;
};

export default UserList;
