import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: "#fafafa",
};

export const themeSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

export default themeSlice.reducer;
