import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import themeReducer from "./reducers/ThemeSlice";

const rootReducer = combineReducers({ userReducer, themeReducer });

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const setupStore = () => {
  return configureStore({
    middleware: customizedMiddleware,
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
