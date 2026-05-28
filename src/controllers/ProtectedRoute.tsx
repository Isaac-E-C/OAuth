import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthController } from './AuthController';

export default function ProtectedRoute() {
  const { user } = useAuthController();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/redirect" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
