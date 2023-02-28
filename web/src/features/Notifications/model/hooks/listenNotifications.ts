import { useFirebase } from "../../../../shared/hooks/firebase";
import { useUser } from "../../../../entities/User/model/hooks/user";
import { Query } from "@firebase/firestore-types";
import { DirectMessage } from "../../../../entities/Message/config/types";
import notification from "../../../../assets/sounds/notification.mp3";
import firebase from "firebase/compat";

const useListenNotifications = () => {
  const firestore = useFirebase((state) => state.firestore);
  const user = useUser((state) => state.user);

  if (!user) {
    return;
  }

  const playNotification = () => {
    void new Audio(notification).play();
  };

  const senderQuery: Query = firestore
    .collection("messages")
    .orderBy("createdAt")
    .where("receiverId", "==", user?.uid)
    .limitToLast(1);

  senderQuery.onSnapshot((querySnapshot) => {
    let item: DirectMessage;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.createdAt = data["createdAt"] ? data["createdAt"]?.toDate() : null;
      item = data as DirectMessage;
      item.id = doc.id;
      if (!item?.isPlayedNotification) {
        void firebase
          .firestore()
          .collection("messages")
          .doc(item.id)
          .update({ ...item, isPlayedNotification: true });
        playNotification();
      }
    });
  });
};
export default useListenNotifications;
