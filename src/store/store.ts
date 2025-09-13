import { fakeLogin, fakeLogout, isAuthenticated } from "@/utils/auth";
import { create } from "zustand";

interface User {
  id: number | null;
  name: string | null;
  email: string | null;
}
interface authState {
  user: User;
  isAuthenticated: boolean;
  logIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initilizeAuth: () => void;
}
export const useAuthStor = create<authState>((set) => ({
  user: { id: null, name: null, email: null },
  isAuthenticated: false,
  logIn: async (email: string, password: string) => {
    const response = fakeLogin(email, password);
    if ((await response).success) {
      set({ user: (await response).user, isAuthenticated: true });
    } else {
      throw new Error((await response).error);
    }
  },
  logout: async () => {
    await fakeLogout();
    set({
      user: { id: null, name: null, email: null },
      isAuthenticated: false,
    });
  },
  initilizeAuth: () => {
    if (isAuthenticated()) {
      set({
        isAuthenticated: true,
        user: { id: 1, name: "Lokendra Nath", email: "lokendra@gmail.com" },
      });
    }
  },
}));
