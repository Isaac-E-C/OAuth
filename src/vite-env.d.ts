/// <reference types="vite/client" />

interface Window {
  __APP_CONFIG__?: {
    GOOGLE_CLIENT_ID?: string;
  };
  google?: {
    accounts: {
      id: {
        initialize: (options: {
          client_id: string;
          callback: (response: GoogleCredentialResponse) => void;
        }) => void;
        renderButton: (
          element: HTMLElement,
          options: {
            theme?: 'outline' | 'filled_blue' | 'filled_black';
            size?: 'large' | 'medium' | 'small';
            width?: number;
            text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
            shape?: 'rectangular' | 'pill' | 'circle' | 'square';
          },
        ) => void;
        prompt: () => void;
      };
    };
  };
}

interface GoogleCredentialResponse {
  credential: string;
}
