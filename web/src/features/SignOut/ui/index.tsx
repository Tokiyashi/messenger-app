import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import { useFirebase } from "../../../shared/hooks/firebase";

const SignOut: FunctionComponent = () => {
  const auth = useFirebase((state) => state.auth);

  const handleSignOut = () => {
    return auth.signOut();
  };

  return (
    <Button fullWidth variant="outlined" onClick={handleSignOut}>
      <Typography> Sign Out </Typography>
    </Button>
  );
};

export default SignOut;
