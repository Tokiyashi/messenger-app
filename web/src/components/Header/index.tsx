import {Box, Button, Typography} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../App";
import Container from "./styles/Container";
import { useAppSelector } from "../../utils/hooks/redux";
import Content from "./styles/Content";

const Header = () => {
  const { auth } = useContext(Context);
  const { user } = useAppSelector((state) => state.userReducer);
  const handleSignOut = () => {
    return auth.signOut();
  };

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Content>
        <Typography> TokiChat </Typography>
        <Box>
          <Typography color="text.contrast"> {user.displayName} </Typography>
          <Button fullWidth variant="outlined" onClick={handleSignOut}>
            <Typography> Sign Out </Typography>
          </Button>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
