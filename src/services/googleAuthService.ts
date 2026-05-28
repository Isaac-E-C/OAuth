import type { AuthUser } from '../models/AuthUser';

const STORAGE_KEY = 'hw13-google-user';

export function getGoogleClientId(): string {
  return window.__APP_CONFIG__?.GOOGLE_CLIENT_ID || import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
}

export function getStoredUser(): AuthUser | null {
  const rawUser = sessionStorage.getItem(STORAGE_KEY);

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser) as AuthUser;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function storeUser(user: AuthUser): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearUser(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function readUserFromCredential(credential: string): AuthUser {
  const [, payload] = credential.split('.');
  const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = decodeURIComponent(
    atob(normalizedPayload)
      .split('')
      .map((character) => `%${(`00${character.charCodeAt(0).toString(16)}`).slice(-2)}`)
      .join(''),
  );
  const googleUser = JSON.parse(decodedPayload) as Partial<AuthUser>;

  return {
    name: googleUser.name || 'Google user',
    email: googleUser.email || '',
    picture: googleUser.picture || '',
  };
}
