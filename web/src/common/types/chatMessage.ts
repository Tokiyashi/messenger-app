import firebase from "firebase/compat";

export type ChatMessage = {
  message: string;
  uid: string;
  createdAt: firebase.firestore.FieldValue;
  chatId: string | undefined;
};
