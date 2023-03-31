import React, { useEffect, useState } from "react";
import { Query } from "@firebase/firestore-types";
import UserItem from "../../entities/User/ui/UserItem";
import { User } from "../../entities/User/model/types/User";
import { useFirebase } from "../../shared/hooks/firebase";
import SearchBar from "./SearchBar";

const UserList = () => {
  const firestore = useFirebase((state) => state.firestore);
  const [searchQuery, setSearchQuery] = useState("");
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

  const searchedUsers = users.filter((item) =>
    item.displayName.toUpperCase().includes(searchQuery.toUpperCase())
  );

  const userItems = searchedUsers.map((user) => (
    <UserItem
      isHideWhenNoMessages={!searchQuery.length}
      key={user.uid}
      item={user}
    />
  ));
  return (
    <>
      <SearchBar handleChangeValue={(value) => setSearchQuery(value)} />
      {userItems}
    </>
  );
};

export default UserList;
