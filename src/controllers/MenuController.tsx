import { useNavigate } from 'react-router-dom';
import { useAuthController } from './AuthController';
import { therapies } from '../models/therapyModel';
import MenuView from '../views/MenuView';

export default function MenuController() {
  const { user, logout } = useAuthController();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return <MenuView user={user} therapies={therapies} onLogout={handleLogout} />;
}
