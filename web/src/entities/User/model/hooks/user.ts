import { create } from "zustand";
import { User } from "../types/User";

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUser = create<Store>((set) => ({
  user: null,
  setUser: (user: User | null) =>
    set((state) => ({
      user: user,
    })),
}));
