import { useContext, useEffect, useState } from "react";
import { Query } from "@firebase/firestore-types";
import { DirectMessage } from "../../../shared/types/chatMessage";
import { Context } from "../../../App";
import { useAppSelector } from "../../../shared/hooks/redux";

export const useFetchDirectMessages = (companionId: string) => {
  const { firestore } = useContext(Context);
  const { user } = useAppSelector((state) => state.userReducer);
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
        data.createdAt = data["createdAt"].toDate();
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
        data.createdAt = data["createdAt"].toDate();
        items.push(data as DirectMessage);
      });
      setReceiverMessages(items);
    });
  }, [companionId]);

  const result = [...senderMessages, ...receiverMessages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return result;
};
