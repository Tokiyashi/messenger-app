import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import useListenNotifications from "../model/hooks/listenNotifications";

const NotificationsDisplay = () => {
  useListenNotifications();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      message="New Message"
    />
  );
};

export default NotificationsDisplay;
