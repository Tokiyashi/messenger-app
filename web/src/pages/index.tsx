import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./AuthPage";
import ChatPage from "./ChatPage";
import firebase from "firebase/compat";
import User = firebase.User;

type PagesProps = {
  user: User | undefined;
};
const Pages: FunctionComponent<PagesProps> = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" element={<ChatPage user={user} />} />}
        <Route path="/sign-up" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
