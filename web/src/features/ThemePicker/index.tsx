import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { BlockPicker } from "react-color";
import { useAppDispatch } from "../../shared/hooks/redux";
import { themeSlice } from "../../shared/store/reducers/ThemeSlice";
import {blue, lightBlue, red} from "@mui/material/colors";

const ThemePicker = () => {
  const dispatch = useAppDispatch();
  const { setColor } = themeSlice.actions;
  const [isShowPicker, setIsShowPicker] = useState(false);
  const handlePickerShow = () => {
    setIsShowPicker(!isShowPicker);
  };

  const colors = ['#ffb136', red[500], blue[500], lightBlue[400]]

  return (
    <Box>
      <Button onClick={handlePickerShow}> Change Theme </Button>
      {isShowPicker && (
        <BlockPicker colors={colors} onChange={(color) => dispatch(setColor(color.hex))} />
      )}
    </Box>
  );
};

export default ThemePicker;
