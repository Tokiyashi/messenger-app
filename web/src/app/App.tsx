import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Pages from "../pages";
import AuthPage from "../pages/AuthPage";
import { useListenUser } from "../entities/User/model/hooks/listenUser";
import {useThemeColors} from "../features/ThemePicker/model/hooks/themeColors";
import {useUser} from "../entities/User/model/hooks/user";

//TODO
//storybook
// tests
//React query
//sort imports

function App() {
  useListenUser();
  const user = useUser((state) => state.user);
  const accentColor = useThemeColors(state => state.accentColor)
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222222",
      },
      primary: {
        main: accentColor,
      },
      secondary: {
        main: "#04674F",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {user?.uid ? <Pages /> : <AuthPage />}
    </ThemeProvider>
  );
}

export default App;
