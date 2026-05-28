import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthController } from './AuthController';
import { getGoogleClientId, readUserFromCredential } from '../services/googleAuthService';
import LoginView from '../views/LoginView';

export default function LoginController() {
  const { user, login } = useAuthController();
  const navigate = useNavigate();
  const googleButtonRef = useRef<HTMLDivElement | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const clientId = getGoogleClientId();

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (window.google?.accounts?.id) {
        setScriptReady(true);
        window.clearInterval(timer);
      }
    }, 150);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!scriptReady || !clientId || !googleButtonRef.current) {
      return;
    }

    window.google?.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        const nextUser = readUserFromCredential(response.credential);
        login(nextUser);
        navigate('/menu', { replace: true });
      },
    });

    googleButtonRef.current.innerHTML = '';
    window.google?.accounts.id.renderButton(googleButtonRef.current, {
      theme: 'outline',
      size: 'large',
      width: 320,
      text: 'continue_with',
      shape: 'rectangular',
    });
  }, [clientId, login, navigate, scriptReady]);

  if (user) {
    return <Navigate to="/menu" replace />;
  }

  return <LoginView clientId={clientId} googleButtonRef={googleButtonRef} />;
}
