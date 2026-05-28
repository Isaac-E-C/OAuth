import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthController } from './AuthController';
import RedirectView from '../views/RedirectView';

export default function RedirectController() {
  const { user } = useAuthController();

  useEffect(() => {
    if (user) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.location.assign('/login');
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [user]);

  if (user) {
    return <Navigate to="/menu" replace />;
  }

  return <RedirectView />;
}
