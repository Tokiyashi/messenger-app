import React, { FunctionComponent, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Context } from "../../../app/App";
import { useAppSelector } from "../../../shared/hooks/redux";

const SignOut: FunctionComponent = () => {
  const { auth } = useContext(Context);
  const { user } = useAppSelector((state) => state.userReducer);

  const handleSignOut = () => {
    return auth.signOut();
  };

  return (
    <Box>
      <Typography color="text.contrast">{user && user.displayName}</Typography>
      <Button fullWidth variant="outlined" onClick={handleSignOut}>
        <Typography> Sign Out </Typography>
      </Button>
    </Box>
  );
};

export default SignOut;
