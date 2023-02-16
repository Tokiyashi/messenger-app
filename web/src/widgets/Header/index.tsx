import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../app/App";
import Container from "./styles/Container";
import { useAppSelector } from "../../shared/hooks/redux";
import Content from "./styles/Content";
import { useParams } from "react-router-dom";
import useAsyncEffect from "use-async-effect";
import { userService } from "../../shared/services/UserService";
import { User } from "../../shared/types/User";

const Header = () => {
  const { auth } = useContext(Context);
  const { user } = useAppSelector((state) => state.userReducer);
  const { companionId } = useParams();
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const handleSignOut = () => {
    return auth.signOut();
  };

  useAsyncEffect(async () => {
    const result = companionId && (await userService.getUserByUid(companionId));

    result && setCurrentUser(result);
  }, [companionId]);

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Content>
        <Typography> {currentUser && currentUser.displayName} </Typography>
        <Box>
          <Typography color="text.contrast">
            {user && user.displayName}
          </Typography>
          <Button fullWidth variant="outlined" onClick={handleSignOut}>
            <Typography> Sign Out </Typography>
          </Button>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
