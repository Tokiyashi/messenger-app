import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { BlockPicker } from "react-color";
import { useAppDispatch } from "../../utils/hooks/redux";
import { themeSlice } from "../../store/reducers/ThemeSlice";

const ThemePicker = () => {
  const dispatch = useAppDispatch();
  const { setColor } = themeSlice.actions;
  const [isShowPicker, setIsShowPicker] = useState(false);
  const handlePickerShow = () => {
    setIsShowPicker(!isShowPicker);
  };

  return (
    <Box>
      <Button onClick={handlePickerShow}> Change Theme </Button>
      {isShowPicker && (
        <BlockPicker onChange={(color) => dispatch(setColor(color.hex))} />
      )}
    </Box>
  );
};

export default ThemePicker;
