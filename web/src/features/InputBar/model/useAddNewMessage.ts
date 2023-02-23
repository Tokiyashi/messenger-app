import firebase from "firebase/compat";
import { useParams } from "react-router-dom";
import {useFirebase} from "../../../shared/hooks/firebase";
import {useUser} from "../../../entities/User/model/hooks/user";

const useAddNewMessage = (value: string) => {
  const firestore = useFirebase(state => state.firestore)
  const user  = useUser((state) => state.user);
  const { companionId } = useParams();

  if (!value || !user || !companionId) {
    return ()=>{return};
  }

  const message = {
    receiverId: companionId,
    message: value,
    uid: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  return async () =>
    await firestore.collection("messages").add(message);
};

export default useAddNewMessage;
