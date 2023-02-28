import { useEffect, useState } from "react";
import { Query } from "@firebase/firestore-types";
import { DirectMessage } from "../../config/types";
import { useFirebase } from "../../../../shared/hooks/firebase";
import { useUser } from "../../../User/model/hooks/user";

export const useFetchDirectMessages = (companionId: string) => {
  const firestore = useFirebase((state) => state.firestore);
  const user = useUser((state) => state.user);
  const [senderMessages, setSenderMessages] = useState<DirectMessage[]>([]);
  const [receiverMessages, setReceiverMessages] = useState<DirectMessage[]>([]);
  const uid = user?.uid;

  useEffect(() => {
    if (!uid || !companionId) {
      return;
    }

    let senderQuery: Query = firestore
      .collection("messages")
      .orderBy("createdAt")
      .where("uid", "==", uid)
      .limitToLast(18);

    senderQuery = senderQuery.where("receiverId", "==", companionId);

    senderQuery.onSnapshot((querySnapshot) => {
      const items: DirectMessage[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.createdAt = data["createdAt"] ? data["createdAt"]?.toDate() : null;
        items.push(data as DirectMessage);
      });
      setSenderMessages(items);
    });

    let receiverQuery: Query = firestore
      .collection("messages")
      .orderBy("createdAt")
      .where("uid", "==", companionId)
      .limitToLast(18);

    receiverQuery = receiverQuery.where("receiverId", "==", uid);

    receiverQuery.onSnapshot((querySnapshot) => {
      const items: DirectMessage[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.createdAt = data["createdAt"]?.toDate();
        items.push(data as DirectMessage);
      });
      setReceiverMessages(items);
    });
  }, [companionId]);

  const isSavedChat = uid === companionId;

  const messages = isSavedChat
    ? [...senderMessages]
    : [...senderMessages, ...receiverMessages].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  return messages;
};
