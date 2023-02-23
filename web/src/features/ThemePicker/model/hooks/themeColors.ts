import { create } from "zustand";

type Store = {
  accentColor: string;
  setAccentColor: (colorHex: string) => void;
};

export const useThemeColors = create<Store>((set) => ({
  accentColor: "#ffb136",
  setAccentColor: (colorHex: string) =>
    set((state) => ({ accentColor: colorHex })),
}));