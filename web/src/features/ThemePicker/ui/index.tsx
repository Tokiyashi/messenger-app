import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { BlockPicker } from "react-color";
import { blue, lightBlue, red } from "@mui/material/colors";
import { useThemeColors } from "../model/hooks/themeColors";

const ThemePicker = () => {
  const setAccentColor = useThemeColors((state) => state.setAccentColor);
  const [isShowPicker, setIsShowPicker] = useState(false);
  const handlePickerShow = () => {
    setIsShowPicker(!isShowPicker);
  };

  const colors = ["#ffb136", red[500], blue[500], lightBlue[400]];

  return (
    <Box>
      <Button onClick={handlePickerShow}> Change Theme </Button>
      {isShowPicker && (
        <BlockPicker
          colors={colors}
          onChange={(color) => setAccentColor(color.hex)}
        />
      )}
    </Box>
  );
};

export default ThemePicker;
