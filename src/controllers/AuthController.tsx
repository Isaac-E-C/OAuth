import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { AuthUser } from '../models/AuthUser';
import { clearUser, getStoredUser, storeUser } from '../services/googleAuthService';

interface AuthControllerValue {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthControllerContext = createContext<AuthControllerValue | null>(null);

export function AuthControllerProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser());

  const value = useMemo<AuthControllerValue>(
    () => ({
      user,
      login: (nextUser) => {
        storeUser(nextUser);
        setUser(nextUser);
      },
      logout: () => {
        clearUser();
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthControllerContext.Provider value={value}>{children}</AuthControllerContext.Provider>;
}

export function useAuthController() {
  const context = useContext(AuthControllerContext);

  if (!context) {
    throw new Error('useAuthController must be used inside AuthControllerProvider');
  }

  return context;
}
