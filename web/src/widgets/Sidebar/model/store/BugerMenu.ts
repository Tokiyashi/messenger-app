import { create } from "zustand";

type Store = {
  isOpenMenu: boolean;
  toggleIsOpen: () => void;
};

export const useBurgerMenu = create<Store>((set) => ({
  isOpenMenu: false,
  toggleIsOpen: () => set((state) => ({ isOpenMenu: !state.isOpenMenu })),
}));
