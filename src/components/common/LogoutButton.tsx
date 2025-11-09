import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button 
      onClick={handleLogout}
      className="tg-btn"
      style={{ 
        padding: '8px 20px',
        marginLeft: '15px',
        fontSize: '14px'
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
