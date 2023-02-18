import firebase from "firebase/compat";
import { useContext } from "react";
import { Context } from "../../../app/App";
import { useAppSelector } from "../../../shared/hooks/redux";
import { useParams } from "react-router-dom";

const useAddNewMessage = (value: string) => {
  const { firestore } = useContext(Context);
  const { user } = useAppSelector((state) => state.userReducer);
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
