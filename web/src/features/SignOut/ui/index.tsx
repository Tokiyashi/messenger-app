import React, { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useFirebase } from "../../../shared/hooks/firebase";
import {useUser} from "../../../entities/User/model/hooks/user";

const SignOut: FunctionComponent = () => {
  const auth = useFirebase((state) => state.auth);
  const user = useUser((state) => state.user);

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
