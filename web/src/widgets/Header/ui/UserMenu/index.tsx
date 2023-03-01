import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { PersonAdd, Settings } from "@mui/icons-material";
import { useUser } from "../../../../entities/User/model/hooks/user";
import ThemePicker from "../../../../features/ThemePicker/ui";
import SignOut from "../../../../features/SignOut/ui";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const user = useUser((state) => state.user);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleClick}>
        <Avatar src={user?.photoURL} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>{user?.displayName}</MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar src={user?.photoURL} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ThemePicker />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SignOut />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
