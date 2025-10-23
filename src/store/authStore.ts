import { create } from 'zustand';
import { User } from '@/types';
import { validateCredentials } from '@/config/users.config';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (username: string, password: string) => {
    const user = validateCredentials(username, password);
    if (user) {
      set({ user, isAuthenticated: true });
      localStorage.setItem('authUser', JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('authUser');
  },
}));
